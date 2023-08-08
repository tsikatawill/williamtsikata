import { Reference } from "sanity";

export type ButtonSize = "small" | "medium";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "blanc"
  | "noire"
  | "disabled";

export type ButtonStyleProps = {
  size: Record<ButtonSize, string>;
  variant: Record<ButtonVariant, string>;
  base: string;
};

export type TextSize = "xs" | "small" | "base" | "lg" | "xl";

export type TextStyleProps = {
  size: Record<TextSize, string>;
};

export type SocialPillProps = {
  icon: React.ReactNode;
  name: string;
  link: string;
};

export type SanityBase = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type Stack = SanityBase & {
  image: SanityImage;
  title: string;
};

export type SocialLink = SanityBase & {
  image: SanityImage;
  name: string;
  link: string;
};

export type Project = SanityBase & {
  image: SanityImage;
  title: string;
  name: string;
  slug: string;
  description: string;
  code_link?: string;
  live_link: string;
  stack: Stack[];
};

export type SanityImage = {
  _type: "image";
  asset: Reference;
};
