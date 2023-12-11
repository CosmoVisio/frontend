import Head from "next/head";
import { Header, Footer } from "@/components";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoTur - Frontend</title>
        <meta property="og:title" content="EcoTur - Home" key="title" />
      </Head>
      <main>
        <Header />
        <div className="bg-secondary" style={{ height: "900px" }}></div>
        <Footer />
      </main>
    </>
  );
}
