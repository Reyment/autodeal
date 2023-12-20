import Image from "next/image";
import React from "react";
import CategoriesSection from "./CategoriesSection";
import IklanSection from "./IklanSection";

const HeroSection = () => {
  const isLoggedIn = true;

  return (
    <div className="xl:pt-[ relative my-[30px] mt-[120px]  flex flex-col overflow-hidden rounded-xl  bg-[#333333] p-[20px]  font-quicksand max-md:mt-[140px] lg:p-[25px] xl:px-[40px] xl:pb-[40px]">
      {/* Decoration */}
      <div className="z-1 absolute right-[5%]   h-[124.08px] origin-top-left rotate-[8.21deg]  rounded-2xl border-[20px] border-[#2D2D2D] bg-[#282828] max-md:hidden md:top-[-85%]  md:w-[733.01px] lg:top-[-70%] lg:w-[800px] xl:top-[-80%] xl:h-[150px] xl:w-[950px]" />

      {/* Identity */}
      <h1 className="z-0 text-2xl font-semibold text-white lg:text-4xl">
        Halo Duran Clayton 👋🏼
      </h1>
      <p className="mt-[6px] text-sm text-white lg:text-base">
        Ayoo temukan yang kamu butuhkan di autodeal.id
      </p>

      {/* Categories Section*/}
      <CategoriesSection />

      {/* Iklan Section */}
      {isLoggedIn && <IklanSection />}
    </div>
  );
};

export default HeroSection;
