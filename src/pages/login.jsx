import Head from "next/head";
import React from "react";

export default function Login() {
  return (
    <>
      <Head>
        <title>EcoTur - Frontend</title>
        <meta property="og:title" content="EcoTur - Login" key="title" />
      </Head>

      <main>
        <h1 className="fw-semibold text-success">Login</h1>
      </main>
    </>
  );
}
