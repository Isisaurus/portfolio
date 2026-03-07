'use client';
import Form from 'next/form';
import { RiMailLine } from 'react-icons/ri';
import { useFormStatus } from 'react-dom';
import { CgSpinner } from 'react-icons/cg';

type FormProps = {
  action: (formData: FormData) => Promise<void>;
};

export default function ContactForm({ action }: FormProps) {
  return (
    <Form action={action} className="flex flex-col gap-5 md:gap-10">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm/6 font-semibold text-gray-950"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-transparent text-gray-950 text-sm border border-gray-950/5 focus-within:border-gray-950/20 focus-visible:border-gray-950/20 py-2 px-3 w-full"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm/6 font-semibold text-gray-950"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="bg-transparent text-gray-950 text-sm border border-gray-950/5 focus-within:border-gray-950/20 focus-visible:border-gray-950/20 py-2 px-3 w-full"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm/6 font-semibold text-gray-950"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="bg-transparent text-gray-950 text-sm border border-gray-950/5 focus-within:border-gray-950/20 focus-visible:border-gray-950/20 py-2 px-3 w-full"
        />
      </div>
      <ContactSubmitButton />
    </Form>
  );
}

const ContactSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="gap-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm/6 font-semibold text-gray-950 ring-1 ring-gray-950/10 hover:ring-gray-950/20 self-start"
      disabled={pending}
    >
      {pending ? (
        <CgSpinner className="size-5 animate-spin" />
      ) : (
        <RiMailLine className="size-5" />
      )}
      <span>
        Send<span className={`${pending ? 'inline' : 'hidden'}`}>ing</span>{' '}
        message
      </span>
    </button>
  );
};
