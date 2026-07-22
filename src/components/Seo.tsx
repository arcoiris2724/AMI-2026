import { useEffect } from "react";

export const SITE_URL = "https://www.advancemyidea.com";

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/" e.g. "/resources/kaizen-for-digital-teams" */
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Manages document head for SEO: title, meta description, canonical,
 * Open Graph / Twitter tags, and JSON-LD structured data.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertCanonical(url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    if (image) upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (image) upsertMeta("name", "twitter:image", image);

    // JSON-LD structured data (page-scoped)
    const SCRIPT_ID = "seo-page-jsonld";
    document.getElementById(SCRIPT_ID)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCRIPT_ID;
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [title, description, path, image, type, keywords, jsonLd]);

  return null;
}
