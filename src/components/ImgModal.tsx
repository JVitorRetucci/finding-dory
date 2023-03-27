import { FC } from "react";
import { Dialog } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { currentGalleryImage } from "@/atoms/currentGalleryImage";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface IImgModalProps {
  path: string;
  alt?: string;
}

export const ImgModal: FC<IImgModalProps> = ({
  path,
  alt = "",
}): JSX.Element => {
  const [_, setCurrentGalleryImage] = useRecoilState(currentGalleryImage);
  return (
    <Dialog
      open={!!path}
      onClose={() => setCurrentGalleryImage("")}
      className="relative z-50"
    >
      
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-xs md:max-w-lg flex bg-slate-50 h-[90%] p-4 rounded">
            <div className="relative h-full w-96">
            <button className="absolute w-10 h-10 p-2 top-0 right-0 z-20"><XMarkIcon className="text-white" onClick={() => setCurrentGalleryImage("")}/></button>
              <Image src={path} className="w-full object-cover" fill alt={alt} />
            </div>
          </Dialog.Panel>
        </div>
      
    </Dialog>
  );
};
