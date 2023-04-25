import Image from "next/image";
import { FC } from "react";

export const Hero: FC = (): JSX.Element => {
  return (
    <div id="hero">
      <h1 className="text-3xl font-bold uppercase text-center mb-4">Estamos procurando a Dory!</h1>
      <div className="relative w-full aspect-square border-amber-600 border-8 rounded-md">
        <Image src="/assets/images/dory/doritos.jpg" alt="Fotinha da Dory" className="object-cover" fill/>
      </div>
    </div>
  );
};