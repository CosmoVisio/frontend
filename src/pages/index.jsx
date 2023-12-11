import Head from "next/head";
import { Header, Footer } from "@/components";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoTur - Início</title>
        <meta property="og:title" content="EcoTur - Home" key="title" />
      </Head>

      <main className="d-flex flex-column vh-100">
        <Header />

        <div
          className="d-flex flex-column h-100"
          style={{ background: "#A39F9F" }}
        >
          <input
            placeholder="BARRA DE PESQUISA"
            className="mx-auto"
            style={{
              border: "none",
              borderRadius: "20px",
              textAlign: "center",
              width: "400px",
              height: "48px",
              marginTop: "52px",
            }}
          />

          <div className="d-flex justify-content-between mx-5 my-5">
            <div className="d-flex flex-column w-100">
              <h2
                className="d-flex flex-wrap"
                style={{ width: "340px", fontWeight: 700 }}
              >
                Conheça Pernambuco de outra forma
              </h2>
              <Image
                src="/image 6.png"
                width={255}
                height={191}
                className="mx-auto my-auto"
              />
            </div>

            <div className="d-flex gap-5 w-100 align-items-center justify-content-center">
              <div className="d-flex flex-column gap-4">
                <Image src="/Rectangle 17.png" width={209} height={209} />

                <Image src="/Rectangle 18.png" width={209} height={209} />
              </div>

              <div className="d-flex">
                <Image src="/Rectangle 19.png" width={234} height={446} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
