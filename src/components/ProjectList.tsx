import { projects } from '@/data';
import Link from 'next/link';
import {
  RiCodeSSlashLine,
  RiEyeLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from 'react-icons/ri';

export default function ProjectList() {
  return (
    <ul className="flex flex-col divide-y divide-gray-950/5" id="my-code">
      {projects.map((project) => {
        const { id, title, subtitle, description, coverImg, code, preview } =
          project;

        return (
          <li key={id} className="md:grid md:grid-cols-[80px_1fr]">
            <div className="decor max-md:hidden" />
            <div className="mx-5 border-x border-gray-950/5">
              <div className="flex flex-col md:flex-row mx-2.5 md:mx-5 border-l border-r md:border-r-0 border-gray-950/5">
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
                <div className="flex-1 decor p-2 border-t border-gray-950/5 md:border-0">
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
                <div className="flex flex-wrap gap-1 md:gap-3 items-center justify-center">
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
  );
}
