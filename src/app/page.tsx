import { RiWhatsappLine } from 'react-icons/ri';
import PublicProjectList from '@/components/PublicProjectList';
import ProjectList from '@/components/ProjectList';
import ContactLink from '@/components/ContactLink';
import Link from 'next/link';
import { favTech } from '@/data';
import StackIcon from '@/components/StackIcon';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const ContactFormAction = async (formData: FormData) => {
    'use server';
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res) {
        console.log('all ok');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <section className="border-t border-b border-gray-950/5 my-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:divide-y-0 divide-y divide-y-gray-950/5">
          <div className="decor max-md:hidden w-20" />
          <div className="md:border-l md:border-r border-gray-950/5 md:mx-2.5 p-5">
            <h1 className="mt-2 text-6xl tracking-tighter sm:text-8xl text-pretty">
              Diana Vitanyi
            </h1>
          </div>
          <div className="md:border-l md:border-r md:mx-2.5 p-5 border-gray-950/5 flex flex-col">
            <p className="max-w-[450px] text-lg/7 font-medium text-pretty text-gray-600 md:self-end">
              Hello, my name is Diana. <br /> I am a software developer with a
              passion to build immersive and user-friendly applications.
              <br />
              Are you looking for a creative problem solver who thinks in code?{' '}
              <span>Let&apos;s get in touch!</span>
            </p>
            <div className="flex gap-3 mt-5 items-center">
              <ContactLink />
              <span>or</span>
              <Link
                href="https://wa.me/qr/4N7ZUA26FB6VN1"
                target="_blank"
                referrerPolicy="no-referrer"
                className="gap-2 inline-flex items-center justify-center rounded-full p-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20"
              >
                <RiWhatsappLine className="size-5" />
                <span className="sr-only">whatsapp</span>
              </Link>
            </div>
          </div>
          <div className="decor md:hidden w-full h-10" />
        </div>
      </section>
      <section className="border-t border-b border-y-gray-950/5 my-10">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5">
          My current favorites
        </p>
        <div>
          <ul className="flex flex-col md:flex-row md:items-center divide-y md:divide-x md:divide-y-0 divide-gray-950/5">
            {favTech.map((tech) => (
              <li key={tech.label} className="p-5 flex items-center gap-3">
                <StackIcon name={tech.icon} className="size-5 md:size-10" />
                <span className="md:sr-only text-sm/6 font-medium">
                  {tech.label}
                </span>
              </li>
            ))}
            <span className="decor flex-1 h-20 max-md:hidden"></span>
          </ul>
        </div>
      </section>
      <section className="border-t border-b border-y-gray-950/5 mt-5">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5">
          My work
        </p>
        <ProjectList />
      </section>
      <div className="decor h-5 w-full border-b border-gray-950/5"></div>
      <section className="my-15">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-t border-y-gray-950/5">
          Public Projects I recently worked on
        </p>
        <div className="flex">
          <div className="w-20 border-b border-gray-950/5 max-md:hidden decor" />
          <PublicProjectList />
        </div>
        <div className="h-5 w-full decor border-b border-gray-950/5" />
      </section>
      <section className="border-t border-b border-gray-950/5 my-10">
        <p className="font-mono text-[0.8125rem]/6 font-medium tracking-widest text-pretty uppercase text-gray-600 p-5 border-b border-y-gray-950/5">
          Contact me
        </p>
        <div className="max-w-screen-xl mx-auto flex">
          <div className="decor max-md:hidden w-20" />
          <div
            className="md:border-l md:border-r md:mx-2.5 p-5 border-gray-950/5 flex flex-col flex-1 items-center justify-center"
            id="contact"
          >
            <div className="max-w-screen-sm">
              <p className="text-lg/7 font-medium text-pretty text-gray-600 text-center my-5">
                Need help with a project? Got feedback on my work? Just want to
                say hi? I&apos;d love to hear from you—drop me a message, and
                I&apos;ll get back to you soon!
              </p>
            </div>
            <div className="my-10 max-w-screen-md w-full p-5">
              <ContactForm action={ContactFormAction} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
