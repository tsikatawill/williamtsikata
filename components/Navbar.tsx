import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <Container className="py-5 flex justify-between items-center">
        <Link href="/">
          <Image
            height={50}
            width={50}
            src="/images/william-01.svg"
            alt="..."
          />
        </Link>

        <ul className="flex gap-2">
          <li>
            <NavLink href="/#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/#contact">Contact</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
