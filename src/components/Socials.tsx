import Link from 'next/link';
import {
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/diana-vitanyi-49211a15a/',
    label: 'LinkedIn',
    Icon: RiLinkedinBoxLine,
  },
  {
    href: 'https://github.com/Isisaurus',
    label: 'GitHub',
    Icon: RiGithubLine,
  },
  {
    href: 'https://wa.me/qr/4N7ZUA26FB6VN1',
    label: 'WhatsApp',
    Icon: RiWhatsappLine,
  },
] as const;

const Socials = () => {
  return (
    <nav
      aria-label="Social links"
      className="flex gap-2 flex-row md:flex-col md:p-5 border-b md:border-r border-gray-950/5 text-gray-950"
    >
      <ul className="flex gap-2 flex-row md:flex-col">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              referrerPolicy="no-referrer"
              aria-label={label}
              className="flex items-center justify-center p-2 rounded-full ring-1 ring-transparent hover:ring-gray-950/20"
            >
              <Icon className="size-6" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Socials;
