import { Gallery } from "@/components/Gallery";
import { currentGalleryImage } from "@/atoms/currentGalleryImage";
import { Hero } from "@/components/Hero";
import { Interactions } from "@/components/Interactions";
import Head from "next/head";
import { useRef } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImgModal } from "@/components/ImgModal";

export default function Home() {
  const currentImage = useRecoilValue(currentGalleryImage);
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
        <main className="flex flex-col min-h-screen bg-rose-700 text-white font-sans">
          <div className="min-h-screen h-full w-full max-w-xl mx-auto p-4">
            <Hero />
            <Interactions />
            <Gallery />
            <ImgModal/>
          </div>
        </main>
    </>
  );
}
