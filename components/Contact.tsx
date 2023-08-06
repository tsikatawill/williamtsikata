import { cn } from "@/lib/utils";
import Container from "./Container";
import SectionLayout from "./SectionLayout";
import { HeadingStyles } from "@/lib/styles";
import Button from "./Button";
import ContactForm from "./ContactForm";
import SocialPill from "./SocialPill";
import { SocialMediaLinks } from "@/lib/SocialMediaLinks";

const Contact = () => {
  return (
    <SectionLayout name="contact" title="Reach out to me">
      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="flex flex-wrap max-w-sm mx-auto gap-5 justify-center">
          {SocialMediaLinks.map(({ name, icon, link }, index) => (
            <SocialPill key={index} name={name} icon={icon} link={link} />
          ))}
        </div>

        <div>
          <ContactForm />
        </div>
      </Container>
    </SectionLayout>
  );
};

export default Contact;
