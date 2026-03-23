import { messageMediums } from "@/data/message-mediums";
import Link from "next/link";

export const MessageMediums = () => {
  return (
    <div className="space-y-4">
      {messageMediums.map((item) => (
        <Link
          key={item.link}
          target="_blank"
          href={item.link}
          className="bg-muted group flex items-center gap-4 rounded-lg p-6"
        >
          {item.icon}
          <span className="text-muted-foreground flex-1 leading-0 group-hover:text-white sm:text-lg">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
