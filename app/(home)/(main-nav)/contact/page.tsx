import { Akpe } from "@/components/akpe";
import { MessageMediums } from "@/components/message-mediums";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with William Tsikata — whether you want to collaborate, ask a question, or just say hi.",
  openGraph: {
    title: "Contact | William Tsikata",
    description:
      "Get in touch with William Tsikata — whether you want to collaborate, ask a question, or just say hi.",
  },
};

export default function Contact() {
  return (
    <section className="space-y-10 py-6">
      <p>
        Got a question about something I built? Want to bounce an idea around?
        Looking to collaborate on a project? Or just want to say hi? I'm always
        happy to hear from people. Reach me through any of these means. I read
        everything and usually get back within a few days. <Akpe />
      </p>

      <MessageMediums />
    </section>
  );
}
