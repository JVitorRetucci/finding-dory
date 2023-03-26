import { Hero } from "@/components/Hero";
import Head from "next/head";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <Head>
        <title>Procurando a Dory</title>
        <meta
          name="description"
          content="Estamos procurando a nossa cachorrinha Dory!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen bg-rose-700">
        <div className="min-h-screen h-full w-full max-w-3xl mx-auto p-4">
          <Hero />
        </div>
      </main>
    </>
  );
}
