import { messageMediums } from "@/data/message-mediums";

export const MessageMediums = () => {
  return (
    <div className="space-y-4">
      {messageMediums.map((item) => (
        <a
          key={item.link}
          href={item.link}
          className="bg-muted group flex items-center gap-4 rounded-lg p-6"
        >
          {item.icon}
          <span className="text-muted-foreground flex-1 leading-0 group-hover:text-white sm:text-lg">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};
