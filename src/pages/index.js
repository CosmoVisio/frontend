import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoTur - Frontend</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <main>
        <h1 className="fw-semibold text-success">Home</h1>
      </main>
    </>
  );
}
