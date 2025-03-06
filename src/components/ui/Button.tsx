"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-2 font-semibold rounded-lg transition-all",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
          "bg-gray-200 text-gray-700 hover:bg-gray-300": variant === "secondary",
        },
        className
      )}
      {...props}
    />
  );
}
