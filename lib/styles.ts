import { ButtonStyleProps, TextStyleProps } from "@/types";

export const ButtonStyles: ButtonStyleProps = {
  variant: {
    primary: "bg-primary hover:bg-primaryLight",
    secondary: "bg-secondary hover:bg-secondaryLight",
    blanc: "bg-white hover:bg-whiteHover text-black",
    noire: "bg-black hover:bg-blackHover text-white",
    ghost: "bg-transparent border-white hover:bg-white",
    disabled: "bg-gray-500 animation-none active:scale-100 cursor-not-allowed",
  },
  size: {
    small: "px-2 py-1",
    medium: "px-4 py-2",
  },
  base: "rounded-md border border-transparent transition-all duration-200 active:scale-[0.98] cursor-pointer",
};

export const TextStyles: TextStyleProps = {
  size: {
    xs: "text-xs",
    small: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
};

export const HeadingStyles: TextStyleProps = {
  size: {
    xs: "text-base font-bold",
    small: "text-lg font-bold",
    base: "text-xl font-bold",
    lg: "text-2xl font-bold",
    xl: "text-3xl font-bold",
  },
};
