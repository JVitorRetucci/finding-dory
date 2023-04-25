import { FC, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { currentGalleryImage } from "@/atoms/currentGalleryImage";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { images } from "@/data/images";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export const ImgModal: FC = (): JSX.Element => {
  const [swiper, setSwiper] = useState<any | null>(null);
  const [currentImageIndex, setCurrentGalleryImage] =
    useRecoilState(currentGalleryImage);
    const [idx, setIdx] = useState(currentImageIndex);
    
  const slideTo = (index: number) => {
    if (!swiper) return;
    swiper.slideTo(index, { speed: 50 });
  };

  useEffect(() => {
    setIdx(currentImageIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    if (idx !== undefined) slideTo(idx)
  }, [idx])

  return (
    <Dialog
      open={!!currentImageIndex && currentImageIndex !== 0}
      onClose={() => setCurrentGalleryImage(undefined)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-sm md:max-w-lg flex bg-slate-50 h-[90%] p-4 rounded">
          <div className="relative h-full w-96 max-w-full">
            <button className="absolute w-10 h-10 p-2 top-0 right-0 z-20">
              <XMarkIcon
                className="text-white"
                onClick={() => setCurrentGalleryImage(undefined)}
              />
            </button>
            <Swiper onSwiper={setSwiper} className="h-full max-w-full" loop={true}>
              {images.map((img, index) => (
                <SwiperSlide
                  key={`${index}-${new Date().getTime().toPrecision()}`}
                  className="max-w-full"
                >
                  <Image
                    src={img.path}
                    className="w-full object-cover"
                    fill
                    alt={img.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="absolute z-10 px-2 top-0 bottom-0 left-0 md:-left-20" onClick={() => swiper.slidePrev()}>
              <ChevronDownIcon className="rotate-90 text-white w-9 h-9 bg-white bg-opacity-50 p-2 rounded-full" />
            </button>
            <button className="absolute z-10 px-2 top-0 bottom-0 right-0 md:-right-20" onClick={() => swiper.slideNext()}>
              <ChevronDownIcon className="-rotate-90 text-white w-9 h-9 bg-white bg-opacity-50 p-2 rounded-full" />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
