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
