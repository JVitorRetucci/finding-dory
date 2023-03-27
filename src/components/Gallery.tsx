import { currentGalleryImage } from "@/atoms/currentGalleryImage";
import Image from "next/image";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";



const images = [
  {
    path: "/assets/images/doritos.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/20220223_160324.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/IMG-20221019-WA0040.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/20230109_074215.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/20211219_224842.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/IMG_20210116_164549887.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/20211101_105330.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/20220508_123606.jpg",
    alt: "Dory",
  },
  {
    path: "/assets/images/IMG_20200927_201206473.jpg",
    alt: "Dory",
  },
];

export const Gallery: FC = (): JSX.Element => {
  const [_, setCurrentGalleryImage] = useRecoilState(currentGalleryImage);
  return (
    <div className="mt-5">
    <h2 className="mb-4 text-lg w-full text-center">🐕 Algumas fotinhas dela:</h2>
    <Swiper
      modules={[Autoplay]}
      className="relative h-64 border-amber-600 bg-amber-600 border-8 rounded-md"
      autoplay={{
        delay: 3000
      }}
      loop={true}
      slidesPerView={1}
    >
      {
        images.map((img) => (
          <SwiperSlide key={img.path}>
            <button onClick={() => setCurrentGalleryImage(img.path)}>
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
function setRecoilState(): [any, any] {
  throw new Error("Function not implemented.");
}

