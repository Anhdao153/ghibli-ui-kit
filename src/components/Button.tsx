import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded text-white transition-all duration-200 shadow-[1px_1px_0px_rgba(0,0,0,0.2)]";

  const variants = {
    primary:
      "bg-[var(--color-primary)] hover:brightness-90 active:brightness-75 active:scale-95 border",
    secondary:
      "bg-[var(--color-secondary)] hover:brightness-90 active:brightness-75 active:scale-95 border",
    accent:
      "bg-[var(--color-accent)] hover:brightness-90 active:brightness-75 active:scale-95 border",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
