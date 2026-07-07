import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
}
