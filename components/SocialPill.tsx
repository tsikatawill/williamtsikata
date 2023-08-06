import { SocialPillProps } from "@/types";
import Link from "next/link";

const SocialPill = ({ icon, name, link }: SocialPillProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className=" w-20 h-20 p-1 sm:w-28 sm:h-28 flex items-center justify-center flex-col gap-3 bg-primary hover:bg-primaryLight rounded-md text-center"
    >
      <div className="text-3xl">{icon}</div>

      <span className="text-xs sm:text-base px-1 block">{name}</span>
    </Link>
  );
};

export default SocialPill;
