import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function GalleryGrid({ photos, compact = false }) {
  return (
    <div className={`gallery-grid ${compact ? "gallery-grid-compact" : ""}`.trim()}>
      {photos.map((photo, index) => (
        <Reveal key={photo.src}>
          <figure className="gallery-card card">
            <div className={`gallery-image-wrap ${compact ? "gallery-image-wrap-compact" : ""}`.trim()}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 679px) 100vw, (max-width: 899px) 50vw, 33vw"
                className="gallery-image"
                priority={index < 2}
              />
            </div>
            <figcaption className="gallery-caption">
              <h3>{photo.title}</h3>
              {!compact ? <p>{photo.description}</p> : null}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
