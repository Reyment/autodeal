"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductCard = () => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  return (
    <>
      <div className="relative mt-[10px] w-[42vw] rounded-xl bg-white font-inter text-[10px] font-medium text-neutral-400 sm:w-[30vw] md:w-[29.5vw] lg:w-[22vw] xl:w-[300px]">
        <div className=" relative w-full">
          <Image
            className="w-full rounded-t-xl object-cover"
            alt=".."
            src="/images/tesla-rodster.png"
            width={443}
            height={250}
          />

          {/* Love Button */}
          <button
            onClick={handleBookmark}
            className="b absolute bottom-[12px] right-[12px] flex h-8 w-8 items-center justify-center rounded-lg bg-white/40 backdrop-blur-sm"
          >
            {bookmark ? (
              <Image
                width={20}
                height={20}
                alt=".."
                src="/svgs/heart-fill.svg"
                className=" object-contain"
              />
            ) : (
              <Image
                width={20}
                height={20}
                alt=".."
                src="/svgs/heart-outline.svg"
                className="bg-transparent"
              />
            )}
          </button>
        </div>

        {/* Deskripsi */}
        <div className=" mt-[10px] px-[12px] pb-[15px] md:mt-[15px] md:px-[20px] md:pb-[20px]">
          <div className=" flex w-full items-center justify-between ">
            <p className=" text-[10px] font-medium text-neutral-400 md:text-xs">
              Jual | Baru
            </p>

            <div className="flex items-center gap-[5px]">
              <Image
                width={12}
                height={12}
                alt="mata"
                src="/svgs/mata.svg"
                className="aspect-square w-[16px] object-contain"
              />
              <p className="text-[10px] font-medium text-neutral-400 md:text-xs">
                120
              </p>
            </div>
          </div>

          <p className="mt-[6px] w-max rounded-md bg-[#FFF7E1] px-[6px] py-[4px] text-[10px] font-bold text-[#D7A901] md:mt-[10px] md:px-[10px] md:py-[6px] md:text-xs">
            2022 - 1500 cc
          </p>

          <h3 className="md:text-md mt-[10px] text-xs font-medium text-zinc-800">
            Tesla Rodster
          </h3>

          <h3 className="text-sm font-bold text-zinc-800 md:text-lg xl:text-2xl">
            Rp 3.518.990.000
          </h3>

          <div className="mt-[10px] flex gap-[6px]  ">
            <Image
              className="object-contain"
              width={12}
              height={12}
              alt=".."
              src="/svgs/map.svg"
            />

            <p className="text-[10px] font-medium text-neutral-400 md:text-xs">
              Jakarta Barat, Kalideres
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
