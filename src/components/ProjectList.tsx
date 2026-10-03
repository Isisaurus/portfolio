import { projects } from '@/data';
import Link from 'next/link';
import { RiCodeSSlashLine, RiEyeLine } from 'react-icons/ri';

export default function ProjectList() {
  return (
    <ul className="flex flex-col divide-y divide-gray-950/5">
      {projects.map((project) => {
        const { id, title, subtitle, description, coverImg, code, preview } =
          project;

        return (
          <li key={id} className="md:grid md:grid-cols-[80px_1fr]">
            <div className="decor max-md:hidden" />
            <div className="ml-5 mr-10 border-x border-gray-950/5">
              <div className="flex flex-col md:flex-row mx-2.5 md:mx-5 border-l border-r md:border-r-0 border-gray-950/5">
                <div className="flex-1">
                  <div className="border-y border-gray-950/5 py-5">
                    <h3 className="ml-5 font-mono font-semibold tracking-widest uppercase">
                      {title}
                    </h3>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${coverImg}`}
                      alt={`${title} screenshot`}
                      className="rounded-xl flex-1 w-full min-h-[334px] object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-end gap-5 items-center border-t border-y-gray-950/5 p-5">
                <div className="flex flex-wrap gap-1 md:gap-3 items-center justify-center">
                  <Link
                    href={code}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    aria-label={`${title} code`}
                    className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
                  >
                    <RiCodeSSlashLine className="size-5" aria-hidden="true" />
                    <span aria-hidden="true">code</span>
                  </Link>
                  <Link
                    href={preview}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    aria-label={`${title} live preview`}
                    className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
                  >
                    <RiEyeLine className="size-5" aria-hidden="true" />
                    <span aria-hidden="true">live preview</span>
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
