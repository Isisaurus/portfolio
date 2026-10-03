'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

/** Show after the user has scrolled past 1.5× the viewport height. */
const SHOW_AFTER_VIEWPORTS = 1.1;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY >= window.innerHeight * SHOW_AFTER_VIEWPORTS);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="fixed right-5 bottom-5 z-50 inline-flex items-center justify-center rounded-full p-2 text-gray-950 bg-neutral-50 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
    >
      <RiArrowUpLine className="size-5" aria-hidden="true" />
    </button>
  );
}
