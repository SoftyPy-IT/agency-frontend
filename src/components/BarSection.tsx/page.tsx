/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface BarSectionProps {
  title: string;
  background?: StaticImageData | string;
  children?: ReactNode;
}

const BarSection: React.FC<BarSectionProps> = ({ title, background, children }) => {
  return (
    <section className="relative w-full h-[200px] md:h-[350px] text-white overflow-hidden flex items-center justify-center">

      <Image
        src={background ?? "/img/4.jpg"} 
        alt="Top Bar Background"
        fill
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
          {title}
        </h1>

        {children && (
          <div className="mt-2">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default BarSection;
