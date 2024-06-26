import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const meta = {
    title: "Simon Ouyang - Innovator, Full-Stack Developer, Designer, Scrum Master",
    name: "Simon Ouyang",
    description: `I've been developing end-to-end web applications for 10 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head> 
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://simon-ouyang.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://simon-ouyang.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@souyang" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full dark:text-white">
        <Navbar />
        <div >{children}</div>
        <Footer />
      </main>
    </div>
  );
}
