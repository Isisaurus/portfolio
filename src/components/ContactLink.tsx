import Link from 'next/link';
import React from 'react';
import { RiMailLine } from 'react-icons/ri';

export default function ContactLink() {
  return (
    <Link
      href="mailto:dianavitanyi@gmail.com?subject=Hello%20There&body=I%20would%20like%20to%20get%20in%20touch%20with%20you."
      target="_blank"
      referrerPolicy="no-referrer"
      className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
    >
      <RiMailLine className="size-5" />
      <span>Send me an email</span>
    </Link>
  );
}
