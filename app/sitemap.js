const routes = [
  "",
  "/about",
  "/mission-vision",
  "/programs",
  "/stories",
  "/videos",
  "/gallery",
  "/get-involved",
  "/donate",
  "/contact"
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://www.neevshaktisanstha.org${route}`,
    lastModified: new Date()
  }));
}
