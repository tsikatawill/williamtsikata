import { ButtonStyles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { ButtonSize, ButtonVariant } from "@/types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        ButtonStyles.base,
        ButtonStyles.variant[variant],
        ButtonStyles.size[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
