import Head from "next/head";
import React from "react";

export default function Profile() {
  return (
    <>
      <Head>
        <title>EcoTur - Frontend</title>
        <meta property="og:title" content="EcoTur - Perfil" key="title" />
      </Head>

      <main>
        <h1 className="fw-semibold text-success">Perfil</h1>
      </main>
    </>
  );
}
