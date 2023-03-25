import { UserAuthForm } from "@/components/common/auth/user-auth-form";
import { Icons } from "@/components/common/icons";
import Meta from "@/components/meta";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { getCurrentUserServer } from "@/server/api/validation/get-server-session";
import { GetServerSideProps } from "next";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Meta
        title="Sign up"
        description="Create an account with our application"
      />

      <main className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href={routes.signIn}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute top-4 right-4 md:top-8 md:right-8"
          )}
        >
          Sign in
        </Link>
        <div className="hidden h-full bg-theme-100 dark:bg-theme-800 lg:block" />
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <Icons.logo className="mx-auto h-6 w-6" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-theme-500 dark:text-theme-400">
                Continue with any of the provider to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-theme-500 dark:text-theme-400">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="hover:text-brand underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="hover:text-brand underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await getCurrentUserServer(ctx);
  if (user?.id)
    return {
      redirect: {
        destination: routes.home,
        permanent: false,
      },
    };
  return {
    props: {},
  };
};
