import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: {
    default: "William Tsikata — Software Developer",
    template: "%s | William Tsikata",
  },
  description:
    "Software developer building thoughtful, accessible web experiences. Explore my projects, blog, and get in touch.",
  metadataBase: new URL("https://williamtsikata.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "William Tsikata",
    title: "William Tsikata — Software Developer",
    description:
      "Software developer building thoughtful, accessible web experiences. Explore my projects, blog, and get in touch.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dev_willman",
    title: "William Tsikata — Software Developer",
    description:
      "Software developer building thoughtful, accessible web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <TooltipProvider>
          <main>{children}</main>
        </TooltipProvider>
      </body>
    </html>
  );
}
