import Link from "next/link";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer select-none active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none";

  const variants = {
    primary:
      "bg-primary hover:bg-primary/95 text-white shadow-md hover:shadow-primary/20 hover:shadow-lg focus:ring-2 focus:ring-primary/50",
    secondary:
      "bg-secondary hover:bg-secondary/95 text-white shadow-md hover:shadow-secondary/20 hover:shadow-lg focus:ring-2 focus:ring-secondary/50",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white     focus:ring-2 focus:ring-primary/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedStyles = twMerge(
    clsx(baseStyles, variants[variant], sizes[size], className)
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
