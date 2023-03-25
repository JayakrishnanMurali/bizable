"use client";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { useIsDarkTheme } from "@/hooks/use-isdarktheme";
import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import * as z from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isDiscorldLoading, setIsDiscordLoading] =
    React.useState<boolean>(false);

  const isDarkTheme = useIsDarkTheme();
  const searchParams = useSearchParams();

  const fromUrl = searchParams?.get("from") || "/";

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: isDarkTheme ? "default" : "outline" })
        )}
        onClick={() => {
          setIsGoogleLoading(true);
          signIn("google", {
            callbackUrl: fromUrl,
          });
        }}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.googleSvg className="mr-2 h-6 w-6" />
        )}{" "}
        Continue with Google
      </button>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: isDarkTheme ? "default" : "outline" })
        )}
        onClick={() => {
          setIsGitHubLoading(true);
          signIn("github", {
            callbackUrl: fromUrl,
          });
        }}
        disabled={isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-6 w-6" />
        )}{" "}
        Continue with Github
      </button>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: isDarkTheme ? "default" : "outline" })
        )}
        onClick={() => {
          setIsDiscordLoading(true);
          signIn("discord", {
            callbackUrl: fromUrl,
          });
        }}
        disabled={isDiscorldLoading}
      >
        {isDiscorldLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.discordSvg className="mr-2 h-6 w-6" />
        )}{" "}
        Continue with Discord
      </button>
    </div>
  );
}
