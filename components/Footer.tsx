import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center text-grayy py-5 text-sm">
        <p>
          Built by{" "}
          <Link
            href="https://twitter.com/dev_willman"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline"
          >
            William M. Tsikata
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
