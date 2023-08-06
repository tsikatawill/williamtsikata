import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = ({ className, ...props }: Props) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4", className)} {...props} />
  );
};

export default Container;
