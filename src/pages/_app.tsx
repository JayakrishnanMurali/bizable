import { api } from "@/utils/api";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "@/styles/globals.css";
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
      <main className={`${robotoMono.variable} font-roboto-mono`}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
