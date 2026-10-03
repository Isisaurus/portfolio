import { StackType } from '@/types';

export const navItems: { title: string; href: string }[] = [
  {
    title: 'my work',
    href: '#my-work',
  },
  {
    title: 'contact me',
    href: '#contact',
  },
];

export const favTech: { label: string; icon: StackType }[] = [
  { label: 'React', icon: 'react' },
  { label: 'Next.js', icon: 'next' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Tailwind CSS', icon: 'tailwind' },
  { label: 'Sanity', icon: 'sanity' },
  { label: 'Sentry', icon: 'sentry' },
];

export const projects: {
  id: number;
  title: string;
  subtitle: string;
  coverImg: string;
  description: string;
  preview: string;
  code: string;
  stack: StackType[];
}[] = [
  {
    id: 1,
    title: 'City Planner',
    subtitle: 'Inspired by transparent cities and close-knit communities',
    coverImg: 'city-planner-app.png',
    description:
      'A full-stack Next app where users can vote and comment on city project ideas. Implemented Google OAuth for easy sign-up and sign-in. Embedded a Sanity studio for content pool management. Styled mobile-first using TailwindCSS. Utilizing React 19 forms with server actions.',
    preview: 'https://city-planner-five.vercel.app/',
    code: 'https://github.com/Isisaurus/city-planner',
    stack: ['next', 'typescript', 'tailwind', 'sanity', 'sentry'],
  },
  {
    id: 2,
    title: 'TR Agency',
    subtitle: 'An old app still kicking',
    coverImg: 'tech-recruitment-agency.jpg',
    description:
      'This project is an out-of-date React app using CRA. Regardless, a fun use of Material UI for styled components to create a dynamic and engaging UI, Contentful for content management and delivery, SWR for filtering and pagination. This project tought me a great deal about data as state in React applications early in my carrier.',
    preview: 'https://tech-recruitment.vercel.app/',
    code: 'https://github.com/Isisaurus/tech-recruitment-website',
    stack: ['react', 'materialui', 'contentful', 'swr'],
  },
];

export const publicLinks: {
  id: number;
  title: string;
  href: string[];
  description: string;
  subtitle: string;
}[] = [
    {
    id: 1,
    title: 'Device Comparison Tool for KPN NL',
    subtitle:
      'Client-side embedded application helping users find the best device through guided recommendations and detailed comparisons.',
    description:
      'A React application embedded within a hybrid webshop environment. The tool guides users through a short quiz to understand their needs and generates a ranked device recommendation based on their responses. It consumes third-party data streams to dynamically render device specifications and highlight meaningful differences between models. The project supported multiple configurations of the same application to meet specific client requirements across deployments. Development was carried out in close collaboration with the KPN team, including UX designers, product managers, frontend and backend engineers, data specialists, and security teams. The project followed agile, sprint-based development cycles with fast iteration and short turnaround times.',
    href: ['https://www.kpn.com/shop/mobiel/telefoons'],
  },
  {
    id: 2,
    title: 'Device Switch Solution',
    subtitle:
      'Self-service embedded SaaS application helping users seamlessly migrate their data from an old device to a new one.',
    description:
      'A React application built with Vite and designed as an embedded front-end SaaS solution for telecom providers, currently serving KPN (NL) and Telekom (DE). The application guides users step-by-step through the device migration process, using URL query parameters to track progress and maintain the user journey. A major focus of the project was content reusability and maintainability; through close collaboration with a back-end developer, we reduced the amount of required content by approximately 40%. The UI is built with TailwindCSS and supports highly customizable theming to adapt to different client branding and configuration requirements. The application consumes data from a REST API using React Query, leveraging caching strategies to improve performance and responsiveness. Accessibility and SEO were key acceptance criteria throughout development.',
    href: ['https://www.telekom.de/hilfe/smartphone-wechselassistent', 'https://www.kpn.com/service/mobiel/overstaphulp'],
  },
  {
    id: 3,
    title: 'Device Compatibility Checker',
    subtitle:
      'Embedded search tool allowing users to verify whether their mobile device is compatible with a medical application.',
    description:
      "A client-side rendered embedded application developed for Abbott Germany to help users quickly check whether their mobile device is compatible with the FreeStyle Libre 3 ecosystem. The tool appears as a modal within multiple customer-facing websites, allowing users to search for their device and instantly receive compatibility results. The project required close collaboration with Abbott’s international teams, including UX designers, product managers, and external engineering teams, to ensure seamless integration across several web platforms. Given the medtech context, the application was developed under strict accessibility standards and a regulated release process, using serialized releases aligned with Veeva approval codes. In addition to the embedded experience, the project included building a dedicated AWS-hosted webpage used to redirect mobile users seeking self-service support for the FreeStyle Libre 3 application. The solution now serves hundreds of users daily across Germany.",
      href: ['https://app.freestylelibre.de/']
  },
  {
    id: 4,
    title: 'Multimedia Information Hub',
    subtitle:
      'Static site generated platform for organizing and delivering instructional video content for customer support agents.',
    description:
      "A Next.js application that statically generates pages to efficiently collect, structure, and deliver multimedia content. The platform enables support agents to quickly access instructional videos through a clear information architecture and fast page loads. The interface is styled using TailwindCSS and deployed on AWS with an optimized CI/CD pipeline to support reliable updates. Despite a tight delivery timeline, the project achieved a Lighthouse accessibility score of 94. Thanks to its performance and usability, the platform quickly exceeded both internal and external traffic expectations and is now planned for further expansion.",
    href: ['https://kpn-wifi.customersaas.com/hulp-videos/'],
  }
];
