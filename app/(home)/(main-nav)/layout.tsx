import { HomeNav } from "@/components/home-nav";
import React from "react";

export default function MainNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNav />
      {children}
    </>
  );
}
