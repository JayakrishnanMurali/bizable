import { siteConfig } from "@/config/site";
import Head from "next/head";
import React from "react";

interface IMeta {
  title?: string;
  description?: string;
}

const Meta: React.FC<IMeta> = ({
  title = siteConfig.name,
  description = siteConfig.description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="apple-mobile-web-app-title" content="Wistr" />
      <meta name="application-name" content="Wistr" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Meta;
