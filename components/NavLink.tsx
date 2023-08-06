import Link from "next/link";

type Props = { href: string; children: React.ReactNode };

const NavLink = ({ href, children }: Props) => {
  return (
    <Link href={href} className="text-grayy hover:text-white">
      {children}
    </Link>
  );
};

export default NavLink;
