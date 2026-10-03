import { RiWhatsappLine } from 'react-icons/ri';
import PublicProjectList from '@/components/PublicProjectList';
import ProjectList from '@/components/ProjectList';
import ContactLink from '@/components/ContactLink';
import Link from 'next/link';

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1 flex flex-col outline-none">
      <section className="border-t border-b border-gray-950/5 my-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:divide-y-0 divide-y divide-y-gray-950/5">
          <div className="decor max-md:hidden w-20" />
          <div className="md:border-l md:border-r border-gray-950/5 md:mx-2.5 p-5">
            <h1 className="mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty">
              Diana Vitanyi
            </h1>
            <p className="mt-4 font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600">
              Full-Stack Developer · React · TypeScript
            </p>
          </div>
          <div className="md:border-l md:border-r md:mx-2.5 p-5 border-gray-950/5 flex flex-col">
            <div className="max-w-[450px] md:self-end">
              <p className="text-xl/8 font-medium text-pretty text-gray-950">
                I&apos;m interested in how things work, feel and come together.
              </p>
              <p className="mt-4 text-base/7 font-medium text-pretty text-gray-600">
                I like understanding how the pieces of an application fit
                together: from APIs and data flows to the interface people
                actually use. When things aren&apos;t clearly defined, I tend to
                dig into the details, question assumptions and work out what the
                system and its constraints actually support.
              </p>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <ContactLink />
              <span>or</span>
              <Link
                href="https://wa.me/qr/4N7ZUA26FB6VN1"
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="WhatsApp"
                className="gap-2 inline-flex items-center justify-center rounded-full p-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
              >
                <RiWhatsappLine className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="decor md:hidden w-full h-10" />
        </div>
      </section>
      <section id="selected-work" className="my-15" aria-labelledby="selected-work-heading">
        <h2
          id="selected-work-heading"
          className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-t border-y-gray-950/5"
        >
          Selected work
        </h2>
        <div className="flex">
          <div className="w-20 border-b border-gray-950/5 max-md:hidden decor" />
          <PublicProjectList />
        </div>
        <div className="h-5 w-full decor border-b border-gray-950/5" />
      </section>
      <div className="decor h-5 w-full border-b border-gray-950/5"></div>
      <section
        id="side-projects"
        className="border-t border-b border-y-gray-950/5 mt-5"
        aria-labelledby="side-projects-heading"
      >
        <h2
          id="side-projects-heading"
          className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5"
        >
          Side projects
        </h2>
        <ProjectList />
      </section>
    </main>
  );
}
