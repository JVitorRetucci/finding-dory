import { currentGalleryImage } from "@/atoms/currentGalleryImage";
import { images } from "@/data/images";
import Image from "next/image";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

export const Gallery: FC = (): JSX.Element => {
  const [_, setCurrentGalleryImage] = useRecoilState(currentGalleryImage);
  return (
    <div className="mt-5">
    <h2 className="mb-4 text-lg w-full text-center">🐕 Algumas fotinhas dela:</h2>
    <Swiper
      modules={[Autoplay]}
      className="relative h-64 md:h-96 border-amber-600 bg-amber-600 border-8 rounded-md"
      autoplay={{
        delay: 3000
      }}
      loop={true}
      breakpoints={{
        270: {
          slidesPerView: 1
        },
        769: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 16
        },
      }}
    >
      {
        images.map((img, index) => (
          <SwiperSlide key={img.path}>
            <button onClick={() => setCurrentGalleryImage(index)}>
              <div className="aspect-square">
                <Image
                  src={img.path}
                  className="object-scale-down"
                  fill
                  alt={img.alt}
                />
              </div>
            </button>
          </SwiperSlide>
        ))
      }
    </Swiper>
    </div>
  );
};

