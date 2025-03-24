import Link from 'next/link';
import { projects, publicLinks } from '@/data';
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

export default function Home() {
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
