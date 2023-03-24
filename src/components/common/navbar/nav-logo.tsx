import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export const NavLogo: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-x-4">
      <div className="">
        <Link href="/" className=" items-center space-x-2 md:flex">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
    </div>
  );
};
