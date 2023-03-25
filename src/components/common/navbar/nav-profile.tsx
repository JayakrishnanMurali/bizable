import { NavThemeToggle } from "@/components/common/navbar";
import { UserAccountNav } from "@/components/common/navbar/nav-useraccount";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const NavProfile = () => {
  const session = useSession();

  const user = session.data?.user;

  return (
    <div className="flex w-full items-center justify-end gap-x-4">
      <NavThemeToggle />
      {!user ? (
        <Link
          href="/signin"
          className={cn(buttonVariants({ size: "sm" }), "px-4")}
        >
          Sign in
        </Link>
      ) : (
        <UserAccountNav user={user} />
      )}
    </div>
  );
};
