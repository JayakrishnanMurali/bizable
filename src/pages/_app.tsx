import { api } from "@/utils/api";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "@/styles/globals.css";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main
        className={`${robotoMono.variable} font-roboto-mono bg-theme-50 dark:bg-theme-900 text-theme-900 dark:text-theme-50 antialiased`}
      >
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </main>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
