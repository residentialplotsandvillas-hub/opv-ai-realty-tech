"use client";

import Image from "next/image";

export default function OPVFestivalBanner() {
  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-3">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-xl md:rounded-2xl">
        <Image
          src="/banners/new1.jpeg"
          alt="Happy Diwali - Open Plots and Villas"
          width={1100}
          height={500}
          priority
          sizes="(max-width: 768px) 100vw, 1400px"
          className="block h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}