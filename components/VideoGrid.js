import Reveal from "@/components/Reveal";

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.searchParams.get("v")) {
      return parsed.searchParams.get("v");
    }

    if (parsed.pathname.includes("/embed/")) {
      return parsed.pathname.split("/embed/")[1];
    }

    if (parsed.pathname.includes("/shorts/")) {
      return parsed.pathname.split("/shorts/")[1];
    }
  } catch {
    return null;
  }

  return null;
}

export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((video) => {
        const videoId = getYouTubeId(video.url);
        const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

        return (
          <Reveal key={`${video.title}-${video.url}`}>
            <article className="video-card card">
              <div className="video-frame">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="video-fallback">
                    <p>Invalid YouTube URL</p>
                  </div>
                )}
              </div>
              <div className="video-content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a href={video.url} target="_blank" rel="noreferrer">
                  Watch on YouTube
                </a>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
