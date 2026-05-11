import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  structuredData?: Array<Record<string, unknown>>;
}

export function SEO({
  title,
  description,
  keywords,
  canonical = "https://www.sagestoneinc.com/",
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  structuredData = [],
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonical);

    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'SageStone Inc', true);

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage, false);
    }

    updateMetaTag('twitter:title', twitterTitle || ogTitle || title, false);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description, false);
    updateMetaTag('twitter:card', ogImage ? 'summary_large_image' : 'summary', false);

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((script) => script.remove());
    structuredData.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.setAttribute('data-seo-jsonld-index', String(index));
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, structuredData]);

  return null;
}
