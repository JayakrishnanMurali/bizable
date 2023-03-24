import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-theme-300 bg-transparent py-2 px-3 text-sm placeholder:text-theme-400 focus:outline-none focus:ring-2 focus:ring-theme-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-theme-700 dark:text-theme-50 dark:focus:ring-theme-400 dark:focus:ring-offset-theme-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
