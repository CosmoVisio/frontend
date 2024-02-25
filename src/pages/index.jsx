import Head from "next/head";
import { Header, Footer } from "@/components";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoTur - Início</title>
        <meta property="og:title" content="EcoTur - Home" key="title" />
      </Head>

      <main className="d-flex flex-column vh-100 home">
        <Header />

        <div className="d-flex flex-column h-100 container">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div className="d-flex flex-column w-100">
              <h2
                className="d-flex flex-wrap"
                style={{ width: "340px", fontWeight: 700 }}
              >
                Descubra Pernambuco de um jeito único!
              </h2>
              <p className="py-3">
                Conheça a beleza de Pernambuco de forma sustentável, onde cada
                passo é uma contribuição para preservar a natureza e enriquecer
                a cultura local. Viaje com consciência, viva experiências
                autênticas!
              </p>
              <Link href="/places" className="link-destinos">
                <Image src="/Vector.svg" width={24} height={24} />
                EXPLORAR DESTINOS
              </Link>
            </div>

            <div className="d-flex gap-5 w-100 align-items-center justify-content-center">
              <Image src="/image_header.png" width={502} height={397} />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
