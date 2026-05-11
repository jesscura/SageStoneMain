# SEO Implementation Notes

## Summary of changes

This branch implements a technical SEO and conversion-readiness pass for the SageStone Inc website.

## New URLs added

- `/virtual-assistant-services/`
- `/customer-support-outsourcing/`
- `/ecommerce-virtual-assistant/`
- `/real-estate-virtual-assistant/`
- `/social-media-management-services/`
- `/business-operations-support/`
- `/web-design-maintenance/`

## Metadata added or updated

- Updated the baseline `index.html` title, meta description, canonical URL, Open Graph tags, and Twitter tags.
- Updated the React `SEO` component to support per-page JSON-LD structured data.
- Added page-specific metadata for each dedicated service page.
- Removed unsupported structured data claims from the baseline HTML, including unverified aggregate rating and pricing claims.

## Structured data added

- Homepage: Organization, WebSite, ProfessionalService, and visible FAQPage schema.
- Service pages: Service, BreadcrumbList, and visible FAQPage schema.

## Crawl and indexability changes

- Added `public/robots.txt` with open crawling rules and sitemap reference.
- Added `public/sitemap.xml` with public indexable URLs.
- Added canonical URLs for the homepage and service pages.

## Internal linking changes

- Homepage service cards link directly to dedicated service pages.
- Footer includes dedicated links to key service pages.
- Service pages include contextual links to related services.

## Redirect assumptions

The app is a Vite React single-page application. Host-level redirects should be configured outside the codebase unless the deployment platform supports redirect rules in repository configuration.

Recommended canonical redirect rules:

- `http://sagestoneinc.com/*` -> `https://www.sagestoneinc.com/:splat`
- `http://www.sagestoneinc.com/*` -> `https://www.sagestoneinc.com/:splat`
- `https://sagestoneinc.com/*` -> `https://www.sagestoneinc.com/:splat`
- Any duplicate preview or alternate production domain should canonicalize to `https://www.sagestoneinc.com` or be blocked from indexing if it must remain accessible.

## Required external actions

- Verify Google Search Console.
- Verify Bing Webmaster Tools.
- Submit `https://www.sagestoneinc.com/sitemap.xml` to Google Search Console.
- Submit `https://www.sagestoneinc.com/sitemap.xml` to Bing Webmaster Tools.
- Confirm canonical domain handling in DNS/hosting.
- Add a verified 1200x630 social preview image if one is not already deployed.
- Track rankings for target keywords:
  - virtual assistant services
  - customer support outsourcing
  - e-commerce virtual assistant
  - real estate virtual assistant
  - social media management services
  - business operations support
  - website maintenance services

## Unresolved technical limitations

- Build and lint commands could not be run from this environment because external dependency installation was not available here. Run `npm install`, `npm run build`, and any available lint/type checks locally or in CI before merging.
- Host-level 301 redirects must be configured in the deployment provider if not already handled.
- Because this is an SPA, confirm the production host rewrites all routes to `index.html` so deep links such as `/virtual-assistant-services/` load correctly.
