import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  id,
  className,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm text-zinc-600 dark:text-[#C4C4CC]"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          "h-[40px] rounded-lg border-0 bg-[#D1FAE5] px-3 py-2 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-[#121214] dark:text-[#E1E1E6]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error && <span className="text-sm text-[#F75A68]">{error}</span>}
    </div>
  );
};
