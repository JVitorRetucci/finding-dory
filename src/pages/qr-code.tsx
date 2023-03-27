import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push('/');
  }, []);
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
      <main className="flex flex-col min-h-screen bg-rose-700 text-white font-sans"></main>
    </>
  );
}
