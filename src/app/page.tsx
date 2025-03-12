import Link from 'next/link';
import { ImGithub, ImLinkedin } from 'react-icons/im';
import { PiMouseScrollLight } from 'react-icons/pi';

export default function Home() {
  return (
    <main className="px-3 md:px-6 py-6">
      <section className="mx-auto max-w-5xl">
        <div className="flex gap-10 min-h-[70vh]">
          {/* left column */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col text-lg">
              <span>Hello, my name is</span>
              <h1 className="text-3xl md:text-5xl uppercase my-5 tracking-widest">
                Diana Vitanyi
              </h1>
              <span>I am a Web Developer.</span>
            </div>
            <ul className="my-10 flex gap-5 items-center">
              <li>
                <Link
                  href={'/'}
                  className="text-neutral-700 hover:text-neutral-500"
                >
                  <span className="sr-only">
                    LinkedIn Account External Link
                  </span>
                  <ImLinkedin className="size-10" />
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  className="text-neutral-700 hover:text-neutral-500"
                >
                  <span className="sr-only">Github Account External Link</span>
                  <ImGithub className="size-10 " />
                </Link>
              </li>

              <li>
                <Link href={'/'}>
                  <span className="sr-only">CV External Link</span>
                  <span className="font-semibold text-lg border border-neutral-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-500/20">
                    CV
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* right column */}
          <div className="flex items-center justify-center flex-1">
            <div className="w-[250px] h-[250px] p-5 border-2 border-neutral-800 rounded-full">
              <div className="w-full h-full bg-neutral-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center text-center py-10">
          <p className="uppercase text-xl text-neutral-800">
            Project Highlights
          </p>
          <PiMouseScrollLight className="size-8 animate-bounce" />
        </div>
      </section>
    </main>
  );
}
