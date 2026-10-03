import { publicLinks } from '@/data';
import Link from 'next/link';
import { RiLink } from 'react-icons/ri';

function visitLabel(title: string, href: string, hrefCount: number) {
  if (hrefCount <= 1) {
    return `Visit ${title}`;
  }

  try {
    const host = new URL(href).hostname.replace(/^www\./, '');
    return `Visit ${title} (${host})`;
  } catch {
    return `Visit ${title}`;
  }
}

export default function PublicProjectList() {
  return (
    <ul className="flex-1 flex flex-col">
      {publicLinks.map((project) => {
        const { id, title, href, description, subtitle } = project;

        return (
          <li key={id} className="border-b border-gray-950/5">
            <div className="flex divide-x divide-gray-950/5 border-b border-gray-950/5">
              <div className="w-10" />
              <div className="p-5 flex-1">
                <div className="flex gap-2 items-center justify-between flex-wrap">
                  <h3 className="font-mono font-semibold tracking-widest uppercase">
                    {title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {href.map((projectHref) => (
                      <Link
                        key={projectHref}
                        href={projectHref}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        aria-label={visitLabel(title, projectHref, href.length)}
                        className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 my-5"
                      >
                        <RiLink className="size-5" aria-hidden="true" />
                        <span aria-hidden="true">visit page</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-xs/6 tracking-wide text-gray-600 max-w-[600px]">
                  {subtitle}
                </p>
              </div>
              <div className="w-10" />
            </div>
            <div className="flex divide-x divide-gray-950/5">
              <div className="w-10" />
              <div className="flex-1 columns-md p-5">
                <div className="space-y-4 text-sm/6 text-gray-600">
                  {description.split(/<br\s*\/?>/i).map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
              <div className="w-10" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
