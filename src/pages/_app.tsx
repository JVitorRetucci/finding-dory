import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";
import { register as registerSwiper } from "swiper/element/bundle";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => registerSwiper(), []);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Analytics />
    </RecoilRoot>
  );
}
