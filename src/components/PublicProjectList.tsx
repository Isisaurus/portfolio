import { publicLinks } from '@/data';
import Link from 'next/link';
import { RiLink } from 'react-icons/ri';

export default function PublicProjectList() {
  return (
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
  );
}
