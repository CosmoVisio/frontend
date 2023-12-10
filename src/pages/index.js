import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoTur - Frontend</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <Header />
        <div className="bg-secondary" style={{ height: '900px' }}></div>
        <Footer />
      </main>
    </>
  );
}
