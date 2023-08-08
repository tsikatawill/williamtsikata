"use client";

import Image, { ImageProps } from "next/image";

type Props = ImageProps & {
  handleLoadComplete(img: HTMLImageElement): void;
};

const StackImage = ({ alt, handleLoadComplete, ...props }: Props) => {
  return <Image alt={alt} onLoadingComplete={handleLoadComplete} {...props} />;
};

export default StackImage;
