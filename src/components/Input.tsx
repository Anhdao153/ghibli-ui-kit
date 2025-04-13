import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`border border-primary rounded px-3 py-2 bg-background text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
};
