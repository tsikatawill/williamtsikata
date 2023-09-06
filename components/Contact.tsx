import Container from "./Container";
import SectionLayout from "./SectionLayout";
import ContactForm from "./ContactForm";
import SocialPill from "./SocialPill";
import { getSocialLinks } from "@/sanity/queries";

const Contact = async () => {
  const socialLinks = await getSocialLinks();

  return (
    <SectionLayout name="contact" title="Reach out to me">
      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div className="flex flex-wrap max-w-sm mx-auto gap-5 justify-center">
          {socialLinks.map((item, index) => (
            <SocialPill key={index} socialLink={item} />
          ))}
        </div>

        <ContactForm />
      </Container>
    </SectionLayout>
  );
};

export default Contact;
