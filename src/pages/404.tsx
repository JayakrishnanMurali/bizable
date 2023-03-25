import Meta from "@/components/meta";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Meta title="404 | Not Found" />

      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-theme-200 px-4 text-center dark:bg-theme-900 sm:px-6 lg:px-8">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link href={routes.home}>
          <Button>Go back home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
