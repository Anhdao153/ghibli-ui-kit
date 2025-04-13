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
  const base = "px-4 py-2 rounded text-white transition-colors";
  const variants = {
    primary: "bg-[var(--color-primary)] hover:bg-opacity-80",
    secondary: "bg-[var(--color-secondary)] hover:bg-opacity-80",
    accent: "bg-[var(--color-accent)] hover:bg-opacity-80",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
