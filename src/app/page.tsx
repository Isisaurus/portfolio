import {
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiCodeSSlashLine,
  RiEyeLine,
  RiLink,
} from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { SiSentry, SiSanity } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  const publicLinks: {
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

  const projects: {
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
      title: 'City Planner',
      subtitle: 'Inspired by transparent cities and close-knit communities',
      coverImg: 'city-planner-app.png',
      description:
        'A full-stack Next app where users can vote and comment on city project ideas. Implemented Google OAuth for easy sign-up and sign-in. Embedded a Sanity studio for content pool management. Styled mobile-first using TailwindCSS. Utilizing React 19 forms with server actions.',
      preview: 'https://city-planner-five.vercel.app/',
      code: 'https://github.com/Isisaurus/city-planner',
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
    },
  ];

  return (
    <main className="flex-1 flex flex-col">
      <div className="border-t border-b border-gray-950/5 my-5">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row md:divide-y-0 divide-y divide-y-gray-950/5">
          <div className="decor max-md:hidden w-20" />
          <div className="md:border-l md:border-r border-gray-950/5 md:mx-2.5 p-5">
            <h1 className="mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty">
              Diana Vitanyi
            </h1>
          </div>
          <div className="md:border-l md:border-r md:mx-2.5 p-5 border-gray-950/5 flex items-end">
            <p className="max-w-[450px] text-lg/7 font-medium text-pretty text-gray-600">
              Hello, my name is Diana. <br /> I am a software developer with a
              passion to build immersive and user-friendly applications.
              <br />
              Are you looking for a creative problem solver who thinks in code?{' '}
              <span>Let&apos;s get in touch!</span>
            </p>
          </div>
          <div className="decor md:hidden w-full h-10" />
        </div>
      </div>
      <section className="border-t border-b border-y-gray-950/5 my-10">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5">
          My current favorites
        </p>
        <div>
          <ul className="flex flex-col md:flex-row md:items-center divide-y md:divide-x md:divide-y-0 divide-gray-950/5">
            <li className="p-5 flex items-center gap-3">
              <RiReactjsLine className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">React</span>
            </li>
            <li className="p-5 flex items-center gap-3">
              <RiNextjsLine className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">Next.js</span>
            </li>
            <li className="p-5 flex items-center gap-3">
              <RiTailwindCssLine className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">
                Tailwind CSS
              </span>
            </li>
            <li className="p-5 flex items-center gap-3">
              <TbBrandTypescript className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">
                TypeScript
              </span>
            </li>
            <li className="p-5 flex items-center gap-3">
              <SiSentry className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">Sentry</span>
            </li>
            <li className="p-5 flex items-center gap-3">
              <SiSanity className="size-5 md:size-10" />
              <span className="md:sr-only text-sm/6 font-medium">Sanity</span>
            </li>
            <span className="decor flex-1 h-20 max-md:hidden"></span>
          </ul>
        </div>
      </section>
      <section className="border-t border-b border-y-gray-950/5 mt-5">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5">
          My work
        </p>
        <ul className="flex flex-col divide-y divide-gray-950/5" id="my-code">
          {projects.map((project) => {
            const {
              id,
              title,
              subtitle,
              description,
              coverImg,
              code,
              preview,
            } = project;

            return (
              <li key={id} className="md:grid md:grid-cols-[80px_1fr]">
                <div className="decor max-md:hidden" />
                <div className="mx-5 border-x border-gray-950/5">
                  <div className="flex flex-col md:flex-row mx-5 border-l border-gray-950/5">
                    <div className="flex-1">
                      <div className="border-y border-gray-950/5 py-5">
                        <h2 className="ml-5 font-mono font-semibold tracking-widest uppercase">
                          {title}
                        </h2>
                        <p className="ml-5 font-mono text-xs/6 tracking-wide text-gray-600 max-w-[400px]">
                          {subtitle}
                        </p>
                      </div>
                      <p className="max-w-[400px] text-base/7 text-gray-600 p-5">
                        {description}
                      </p>
                    </div>
                    <div className="flex-1 decor p-2">
                      <div className="bg-gray-200 p-2 w-full h-full min-h-[350px] flex">
                        <div
                          className="rounded-xl flex-1 bg-no-repeat bg-cover bg-center"
                          style={{
                            backgroundImage: `url('/images/${coverImg}')`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center border-t border-y-gray-950/5 p-5">
                    <ul className="flex gap-3">
                      <li>
                        <RiNextjsLine className="size-5" />
                      </li>
                      <li>
                        <RiReactjsLine className="size-5" />
                      </li>
                      <li>
                        <RiTailwindCssLine className="size-5" />
                      </li>
                    </ul>
                    <div className="flex gap-3">
                      <Link
                        href={code}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
                      >
                        <RiCodeSSlashLine className="size-5" />
                        <span>code</span>
                      </Link>
                      <Link
                        href={preview}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
                      >
                        <RiEyeLine className="size-5" />
                        <span>live preview</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="decor h-5 w-full border-b border-gray-950/5"></div>
      <section className="my-15">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-t border-y-gray-950/5">
          Public Projects I recently worked on
        </p>
        <div className="flex">
          <div className="w-20 border-b border-gray-950/5 max-md:hidden decor" />
          <ul className="flex-1 flex flex-col">
            {publicLinks.map((project) => {
              const { id, title, href, description, subtitle } = project;

              return (
                <li key={id} className="border-b border-gray-950/5">
                  <div className="flex divide-x divide-gray-950/5 border-b border-gray-950/5">
                    <div className="w-5" />
                    <div className="p-5 flex-1">
                      <div className="flex gap-2 items-center justify-between flex-wrap">
                        <p className="font-mono font-semibold tracking-widest uppercase">
                          {title}
                        </p>
                        <Link
                          href={href}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 my-5"
                        >
                          <RiLink className="size-5" />
                          <span>visit page</span>
                        </Link>
                      </div>
                      <p className="font-mono text-xs/6 tracking-wide text-gray-600 max-w-[600px]">
                        {subtitle}
                      </p>
                    </div>
                    <div className="w-5" />
                  </div>
                  <div className="flex divide-x divide-gray-950/5">
                    <div className="w-5" />
                    <div className="flex-1 columns-md p-5">
                      <p className="text-sm/6 text-gray-600">{description}</p>
                    </div>
                    <div className="w-5" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-5 w-full decor border-b border-gray-950/5" />
      </section>
      <section className="my-15"></section>
    </main>
  );
}
