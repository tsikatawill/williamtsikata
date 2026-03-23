"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const navItems = [
  { label: "Projects", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "The other side", href: "/the-other-side" },
];

export const HomeNav = () => {
  const pathname = usePathname();

  return (
    <Tabs className="mt-4">
      <TabsList>
        {navItems.map((item) => (
          <TabsTrigger
            key={item.href}
            value={item.href}
            data-state={pathname === item.href ? "active" : "inactive"}
            asChild
          >
            <Link href={item.href}>{item.label}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
