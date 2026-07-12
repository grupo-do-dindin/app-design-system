import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="
              inline-flex items-center justify-center
              px-6 py-2
              rounded-md
              text-white
              bg-green-700
              hover:bg-green-800
              active:bg-green-900
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
              focus:ring-offset-2
              font-medium
            "
      {...props}
    >
      {children}
    </button>
  );
}
