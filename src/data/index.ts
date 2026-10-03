export const projects: {
  id: number;
  title: string;
  subtitle: string;
  coverImg: string;
  description: string;
  preview: string;
  code: string;
}[] = [
  {
    id: 1,
    title: `City Planner`,
    subtitle: `Inspired by transparent cities and close-knit communities`,
    coverImg: `city-planner-app.png`,
    description:
      `A full-stack Next app where users can vote and comment on city project ideas. Implemented Google OAuth for easy sign-up and sign-in. Embedded a Sanity studio for content pool management. Styled mobile-first using TailwindCSS. Utilizing React 19 forms with server actions.`,
    preview: `https://city-planner-five.vercel.app/`,
    code: `https://github.com/Isisaurus/city-planner`,
  },
  {
    id: 2,
    title: `TR Agency`,
    subtitle: `An old app still kicking`,
    coverImg: `tech-recruitment-agency.jpg`,
    description:
      `This project is an out-of-date React app using CRA. Regardless, a fun use of Material UI for styled components to create a dynamic and engaging UI, Contentful for content management and delivery, SWR for filtering and pagination. This project tought me a great deal about data as state in React applications early in my carrier.`,
    preview: `https://tech-recruitment.vercel.app/`,
    code: `https://github.com/Isisaurus/tech-recruitment-website`,
  },
];

export const publicLinks: {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  href: string[];
}[] = [
    {
      id: 0,
      title: `WOW Support Hub`,
      subtitle: `Customer-facing support application bringing CMS content, support journeys and self-service tools into one experience.`,
      description: `Customer-facing support application for WOW’s residential and commercial customers, combining CMS-driven content with interactive support journeys, search and third-party services. The application is built with Next.js, React and TypeScript and is scheduled to go into production in December.<br /><br />
        The application uses a BFF architecture to keep external services behind the application layer, integrating Contentful, Qelp Care support APIs and other customer-facing services. Content is organized into separate residential and commercial experiences, with shared application infrastructure and feature-specific domain logic.<br><br>
        Quality is built around user stories and technical requirements, with colocated Vitest and Testing Library suites covering route and content decisions, interactions and accessibility. The application also uses strict TypeScript, accessibility-focused linting and automated AWS deployment, with functional tests enforced through the local pre-push quality gate.
      `,
      href: [`https://wow-support-app.customersaas.com/help-center`]
    },
    {
    id: 1,
    title: `Device Comparison Tool for KPN NL`,
    subtitle:
      `An embeddable React application helping KPN customers find suitable phones through a guided preference quiz, ranked recommendations and side-by-side comparisons.`,
    description:
      `The application uses React and TypeScript and runs inside KPN’s mobile phone webshop environment. The application consumes quiz and device APIs to dynamically generate recommendations, fetch device specifications and support comparisons between up to two devices. It includes branching quiz flows, session-based progress recovery, configurable A/B test variants and client-specific shop integrations.<br />Designed the host integration around a bootstrap loader and custom application lifecycle events, with assets delivered through AWS S3/CDN. The application supported multiple KPN configurations from the same codebase, including different deployment and shop-flow requirements.`,
    href: [`https://www.kpn.com/shop/mobiel/telefoons`],
  },
  {
    id: 2,
    title: `Content Preview & QA Tool`,
    subtitle: `Internal React application for inspecting and validating how CMS content and flows are rendered in frontend applications.`,
    description: `The application connects to different customer APIs and provides a searchable view of products and topics, combining the underlying API response with a rendered preview of the corresponding content. It supports multiple content types, including articles, guided FAQs, troubleshooters, usecases, content overviews, external links and video, as well as full flow journeys.<br><br>
      The selected customer, content and journey state are kept in the URL, making previews directly shareable and allowing QA issues to be reproduced from a link. It also provides access to the underlying JSON, refresh controls, editing links and validation feedback for broken flow navigation.<br><br>
      Built with React, TypeScript, React Router and TanStack React Query, with a custom Textile parser for rendering Qelp Care content.`,
    href: []
  },
  {
    id: 3,
    title: "WOW Content Migration & Validation Workbench",
    subtitle: "Internal full-stack workbench for migrating, inspecting and validating Help Center content across Contentful environments.",
    description: `Internal Node.js and TypeScript application developed alongside the WOW Help Center migration, connecting a legacy Contentful space to a new content model and providing a controlled workflow for transforming, reviewing and publishing content.<br><br>
      The application maps legacy articles, videos, PDFs and external links onto the new Help Center model, enriches them with content-organization data and prepares localized content for the new space. A snapshot-first workflow and guarded Contentful Management API operations make large batches safer to inspect and migrate, while validation and repair utilities handle data that the CMS itself does not validate.<br><br>
      The inspection interfaces are primarily a way to make the underlying data visible to other teams: they expose mappings, unmatched content, relationships and resulting Contentful data so that technical and content questions can be investigated against the actual system rather than assumptions. In this way, the tool became a shared validation and technical reference point across the project.<br><br>
      Built with Node.js, TypeScript and Express, using Contentful’s Delivery and Management APIs, Zod validation, custom Rich Text conversion and guarded batch operations.
    `,
    href: []
  },
  {
    id: 4,
    title: `WOW Content Architecture Preview`,
    subtitle: `Internal React application for validating content structure, taxonomy and audience segmentation before production.`,
    description: `Internal preview application built to validate the content architecture of WOW’s support experience before the catalog was published. It turns exported content data into a searchable, filterable view of categories, subcategories, assets, page types and residential versus commercial audiences.<br><br>
      The application uses versioned static JSON snapshots generated from working content exports, with merge rules that combine asset metadata, placements, audience flags and content types into a single catalog. This made it possible to inspect the proposed information architecture and identify how content was organized across different customer audiences before those decisions went live.<br><br>
      Built with React and TypeScript, with a small data-processing pipeline using TypeScript and Cheerio to transform HTML exports into application-ready data. Filters and search state are reflected in the URL, making specific parts of the content inventory easy to review and share.`,
    href: [`https://static.customersaas.com/wow-content-org-preview`]
  },
  {
    id: 5,
    title: `Device Switch Solution`,
    subtitle: `Multi-tenant embedded SaaS application for guided device-switch journeys.`,
    description: `Embedded self-service application helping telecom customers move from an old device to a new one through guided, step-by-step journeys.<br><br>
    The React and TypeScript application runs as a multi-tenant SaaS widget embedded across telecom websites, currently supporting KPN in the Netherlands and Telekom in Germany. It loads client-specific journeys from the Qelp Care API and renders guided instructions, troubleshooting flows, articles and image overviews.<br><br>
    A key part of the architecture is using the URL to represent the user’s progress through a journey. Steps, choices and troubleshooting context are encoded into the URL, allowing users to refresh, navigate back and share a journey without losing their place. Client configuration controls branding, locale, theming and content, allowing the same application to support different deployments without changing the underlying application logic.<br><br>
    The application is delivered through AWS S3/CDN and integrates with host pages through client-specific loaders and custom events. React Query handles API data and caching, with isolated theming to prevent the embedded application from conflicting with the host website.`,
    href: [`https://www.telekom.de/hilfe/smartphone-wechselassistent`, `https://www.kpn.com/service/mobiel/overstaphulp`],
  },
  {
    id: 6,
    title: `Device Compatibility Checker`,
    subtitle:
      `Embedded application helping users in Germany check whether their phone or tablet is compatible with Abbott’s FreeStyle Libre apps.`,
    description:
      `The React and TypeScript application runs as an accessible modal embedded across Abbott’s customer-facing websites, with a three-step flow for selecting a Libre app, searching for a device and checking its compatibility. It integrates device search and capability APIs, using debounced and cached fetching to keep the experience responsive while handling compatibility states such as compatible, incompatible and unknown.<br />The application is delivered through a CDN and supports both embedded use and a Qelp-hosted microsite. The integration replaced an earlier iframe-based approach with a script-based embed and custom host events, while configuration-driven content supports German legal and product-specific messaging. The application was developed and released within Abbott’s regulated production environment, including accessibility requirements and Veeva-reviewed content.`,
      href: [`https://app.freestylelibre.de`]
  }
];
