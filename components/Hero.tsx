import Container from "./Container";

const Hero = () => {
  return (
    <section>
      <Container className="py-10 sm:py-14 text-center">
        <p>Hello there!</p>

        <h1 className="text-5xl mb-2 sm:text-6xl font-bold">
          I&lsquo;m William Tsikata
        </h1>
        <p>A Frontend Web Developer</p>
      </Container>
    </section>
  );
};

export default Hero;
