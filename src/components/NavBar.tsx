import Link from 'next/link';
import React from 'react';
import { navItems } from '@/data';

const NavBar = () => {
  return (
    <header className="border-b border-b-neutral-200 hidden md:block">
      <nav>
        <ul className="flex p-5 gap-5 col-start-2 row-start-1 row-end-2 items-center justify-end text-md/6 capitalize">
          {navItems.map((navItem) => {
            const { href, title } = navItem;
            return (
              <li key={title}>
                <Link
                  href={href}
                  className="font-mono text-xs/6 tracking-wide text-gray-600 uppercase link px-2 hover:text-gray-700"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
