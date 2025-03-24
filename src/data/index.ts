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
  href: string;
  description: string;
  subtitle: string;
}[] = [
  {
    id: 1,
    title: 'Device Switch Solution',
    subtitle:
      'Self-service embedded front-end SaaS application to help users migrate their information from their old phone to the new one.',
    description:
      "A React project created using Vite. As a key feature, the app utilizes the URL query to track the user's journey through the process. Achieving content reusability was a key goal on the project. This goal was completed beyond expectations in collaboration with a back-end developer resulting in producing 40% less content. The project is styled using TailwindCSS with highly customizable themes per client configuration. The code base queries data from a REST API using React Query and its data caching for an optimized performance. The project had high level acceptance criterias when it comes to accessibility and SEO.",
    href: 'https://www.telekom.de/hilfe/smartphone-wechselassistent',
  },
  {
    id: 2,
    title: 'Multimedia Information Hub',
    subtitle:
      'Static generated web pages created by a Next application to effectively collect and organize video content for agents.',
    description:
      'The application is styled using TailwindCSS, hosted via AWS and has an optimized CI/CD pipeline. With a 94 on lighthouse accessibility score, the application was delivered within a tight deadline, achieving a very happy client. :) Thanks to the information architecture and the high performance, the traffic on the pages are exceeding both internal and external expectations resulting in plans to expand the hub.',
    href: 'https://kpn-wifi.customersaas.com/hulp-videos/',
  },
];
