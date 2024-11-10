import cn from "classnames";

export type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "default";
  size: "sm" | "base" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const {
    children,
    variant = "default",
    size = "base",
    disabled = false,
    onClick,
  } = props;

  const disabledClassName =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled: no-pointer-events";

  const hoverActiveClassName =
    "enabled:hover:transform enabled:hover:scale-105 enabled:transition enabled:duration-300";

  const buttonClassName = cn(
    "rounded",
    {
      "bg-primary text-white ": variant === "primary",
      "bg-white text-primary border border-2 border-primary":
        variant === "secondary",
      "text-primary underline": variant === "default",
    },
    {
      "p-4": size === "base",
      "p-2": size === "sm",
      "p-8": size === "lg",
    },
    disabledClassName,
    hoverActiveClassName
  );

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
