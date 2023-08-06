import { HeadingStyles, TextStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const SectionLayout = ({ name, title, description, children }: Props) => {
  return (
    <section className="py-10 sm:py-14" id={name.toLowerCase()}>
      <div className="text-center max-w-sm mx-auto mb-5">
        <p
          className={cn(
            TextStyles.size.small,
            "uppercase text-primary font-semibold"
          )}
        >
          {name}
        </p>
        <h2 className={cn(HeadingStyles.size.xl, "capitalize py-2")}>
          {title}
        </h2>

        {description && <p>{description}</p>}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default SectionLayout;
