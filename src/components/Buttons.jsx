import { cn } from "../utils/cn";

export default function Button({
  children,
  variant = "primary", // primary | secondary | outline | fab
  as = "button",
  className,
  ...props
}) {
  const Comp = as;
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "hover:opacity-95 focus-visible:ring-primary",
    secondary:
      "bg-secondary text-white hover:opacity-95 focus-visible:ring-secondary",
    outline:
      "border border-secondary bg-transparent hover:bg-secondary hover:text-white focus-visible:ring-secondary",
    fab: "rounded-full w-12 h-12 p-0 bg-primary text-white shadow hover:opacity-95 focus-visible:ring-primary",
  };

  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}