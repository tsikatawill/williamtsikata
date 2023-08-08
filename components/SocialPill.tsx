import { urlForImage } from "@/sanity/lib/image";
import { SocialLink } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SocialPill = ({ socialLink }: { socialLink: SocialLink }) => {
  const { link, name, image } = socialLink;
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className=" w-20 h-20 p-1 sm:w-28 sm:h-28 flex items-center justify-center flex-col gap-3 bg-primary hover:bg-primaryLight rounded-md text-center"
    >
      <div className="w-10 text-white">
        <Image
          src={urlForImage(image).url()}
          width={300}
          height={300}
          alt={name}
        />
      </div>

      <span className="text-xs sm:text-base px-1 block">{name}</span>
    </Link>
  );
};

export default SocialPill;
