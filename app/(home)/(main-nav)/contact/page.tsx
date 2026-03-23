import { Akpe } from "@/components/akpe";
import { MessageMediums } from "@/components/message-mediums";

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
