import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="container text-theme-600 dark:text-theme-500">
      <div className="flex  flex-col items-center justify-between gap-4 border-t border-t-theme-200 dark:border-t-theme-700 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="hidden sm:inline-block" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              jayakrishnan
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
          </p>
        </div>

        <div className="mt-4 flex items-center gap-x-2 sm:mt-0">
          <p className="hidden font-medium sm:block">Connect:</p>
          <div className="flex gap-x-4 ml-4 items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.twitter />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.linkedIn />
            </Link>
            <Link href={`mailto:${siteConfig.email}`}>
              <Icons.mail />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
