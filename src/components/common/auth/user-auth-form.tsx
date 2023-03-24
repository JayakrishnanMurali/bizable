"use client";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIsDarkTheme } from "@/hooks/use-isdarktheme";
import { toast } from "@/hooks/use-toast";
import { strStrip } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isDiscorldLoading, setIsDiscordLoading] =
    React.useState<boolean>(false);

  const searchParams = useSearchParams();

  const isEmptyInput = !watch("email");

  const isDarkTheme = useIsDarkTheme();

  const isSignIn =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/signin");

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: strStrip(data.email),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 mb-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="johndoe@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="p-1  text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            className={cn(buttonVariants())}
            disabled={isLoading || isEmptyInput}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isSignIn ? "Sign in with Email" : "Sign up with Email"}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-theme-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-theme-50 dark:bg-theme-900 px-2 text-theme-600 dark:text-theme-500">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(
          buttonVariants({ variant: isDarkTheme ? "default" : "outline" })
        )}
        onClick={() => {
          setIsGoogleLoading(true);
          signIn("google");
        }}
        disabled={isLoading || isGoogleLoading}
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
          signIn("github");
        }}
        disabled={isLoading || isGitHubLoading}
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
          signIn("discord");
        }}
        disabled={isLoading || isDiscorldLoading}
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
