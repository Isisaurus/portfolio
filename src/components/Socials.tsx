import Link from 'next/link';
import React from 'react';
import {
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <ul className="flex gap-2 flex-row md:flex-col md:p-5 border-b md:border-r border-gray-950/5 text-gray-950">
      <li>
        <Link
          href="https://www.linkedin.com/in/diana-vitanyi-49211a15a/"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center p-2 rounded-full ring-1 ring-transparent hover:ring-gray-950/20"
        >
          <RiLinkedinBoxLine className="size-6" />
          <span className="sr-only">linkedin</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/Isisaurus"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center p-2 rounded-full ring-1 ring-transparent hover:ring-gray-950/20"
        >
          <RiGithubLine className="size-6" />
          <span className="sr-only">github</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://wa.me/qr/4N7ZUA26FB6VN1"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center p-2 rounded-full ring-1 ring-transparent hover:ring-gray-950/20"
        >
          <RiWhatsappLine className="size-6" />
          <span className="sr-only">whatsapp</span>
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
