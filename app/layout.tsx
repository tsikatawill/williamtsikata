import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import NextRouteProgress from "next-route-progress";
import { Crimson_Pro, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Willfolio",
  description: "Willfolio by William Tsikata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        crimsonPro.variable,
        dmSans.variable,
        jetbrainsMono.variable,
        "font-sans",
      )}
    >
      <body className="bg-background">
        <NextRouteProgress
          color="var(--primary)"
          easingFunction="ease"
          height={5}
          transitionDuration={300}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
