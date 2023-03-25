import { cn } from "@/lib/utils";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[state=on]:bg-theme-200 dark:hover:bg-theme-800 dark:data-[state=on]:bg-theme-700 focus:outline-none dark:text-theme-100 focus:ring-2 focus:ring-theme-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-offset-theme-900 hover:bg-theme-100  dark:hover:text-theme-100 dark:data-[state=on]:text-theme-100",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "bg-transparent border border-theme-200 hover:bg-theme-100 dark:border-theme-700",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
