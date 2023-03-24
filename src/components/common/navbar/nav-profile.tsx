import { NavThemeToggle } from "@/components/common/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavProfile = () => {
  return (
    <div className="flex w-full items-center justify-end gap-x-4">
      <NavThemeToggle />
      <Link
        href="/login"
        className={cn(buttonVariants({ size: "sm" }), "px-4")}
      >
        Login
      </Link>
    </div>
  );
};
