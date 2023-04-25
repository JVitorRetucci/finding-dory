import { atom } from "recoil";

export const currentGalleryImage = atom<number | undefined>({
  key: 'imageGallery',
  default: undefined
});