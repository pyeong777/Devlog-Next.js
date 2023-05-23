import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { AiFillGithub } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Contact me",
  description: "메일 보내기",
};

export default function contactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-2xl font-bold">Contact Me</h2>
      <p>seowns9520@gmail.com</p>
      <div className="flex gap-4 my-2">
        <a
          href="https://github.com/pyeong777"
          target="_blank"
          rel="noreferrer"
          className="text-4xl hover:text-my-color"
        >
          <AiFillGithub />
        </a>
      </div>
      <h2 className="my-8 text-2xl font-bold">Send me an email</h2>
      <ContactForm />
    </section>
  );
}
