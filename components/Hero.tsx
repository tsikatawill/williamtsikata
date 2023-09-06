import Link from "next/link";
import Container from "./Container";
import { ButtonStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section>
      <Container className="py-10 space-y-4 sm:py-14 text-center">
        <p>Hello there! 👋</p>

        <h1 className="text-5xl sm:text-6xl font-bold">
          I&lsquo;m William Tsikata
        </h1>

        <p>A Frontend Web Developer</p>

        <Link
          href={"https://bit.ly/william-cv"}
          target="_blank"
          rel="noreferrer"
          className={cn(
            ButtonStyles.base,
            ButtonStyles.size.medium,
            ButtonStyles.variant.primary,
            "block w-fit mx-auto font-bold"
          )}
        >
          My CV
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
