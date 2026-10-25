import { useEffect } from "react";
import { remoteImages } from "../lib/images";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

const SITE_NAME = "Meidlinger Autoteile";
const DEFAULT_DESCRIPTION =
  "Kfz-Ersatzteile, Zubehör, Öle und Werkzeuge in Wien-Meidling. Fachberatung, Expressbeschaffung und Abholung in der Steinbauergasse 36, 1120 Wien.";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo({ title, description, path = "/", noindex = false }: SeoProps) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const canonicalUrl = `${siteUrl}${path === "/" ? "/" : path}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description || DEFAULT_DESCRIPTION);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "de_AT");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description || DEFAULT_DESCRIPTION);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description || DEFAULT_DESCRIPTION);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let favicon = document.head.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.type = "image/png";
    favicon.href = remoteImages.logo;
  }, [title, description, path, noindex]);

  return null;
}

export { DEFAULT_DESCRIPTION };
