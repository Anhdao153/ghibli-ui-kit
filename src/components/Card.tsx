import React from "react";
import { cn } from "@/libs/utils";

interface CardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        `bg-background rounded-md border text-text shadow-2xl p-4 ${className}`
      )}>
      {header && <div className="mb-2">{header}</div>}
      <div>{children}</div>
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  );
};
