import React from "react";
import Image from "next/image";

const IklanSection = () => {
  return (
    <>
      <div className="mt-[24px] w-full ">
        <div className=" border border-zinc-800" />

        <h3 className="my-[24px] text-xl  text-white">Iklan Saya</h3>

        <div className="flex h-[124px] w-full items-center justify-between md:h-[178px]">
          {/* Isi Iklan */}
          <div className="flex h-full   w-full md:w-[49%] xl:w-[588px] ">
            <Image
              className="h-full w-1/2 rounded-bl-xl rounded-tl-xl object-cover"
              width={280}
              height={180}
              alt="product"
              src="/images/tesla-rodster.png"
            />
            <div className="h-full w-1/2 rounded-br-xl rounded-tr-xl bg-[#282828] p-2.5 px-3 lg:px-[15px]">
              <div className="flex w-full justify-between">
                <p className=" sm:text-md text-[10px] font-medium text-neutral-400 ">
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

              <div className="inline-flex h-5 w-[84px] items-center justify-center gap-2.5 rounded-md bg-[#333333] px-1.5 py-1 md:my-[10px] md:h-[27px] md:w-[105px]">
                <div className=" text-[10px] font-bold text-yellow-400 md:text-xs">
                  2022 - 1500 cc
                </div>
              </div>

              <h3 className="mt-2 text-xs font-medium text-white lg:text-sm">
                Tesla Rodster
              </h3>

              <h3 className="text-[13px] font-bold text-white md:text-base">
                Rp 3.518.990.000
              </h3>

              <div className="mt-[10px] flex  w-full items-center justify-between ">
                <div className=" flex h-full items-center gap-[6px]  ">
                  {/* Map */}
                  <Image
                    className="object-contain"
                    width={12}
                    height={12}
                    alt=".."
                    src="/svgs/map.svg"
                  />

                  <p className="h-full text-[10px] font-medium text-neutral-400 lg:text-xs">
                    Jakarta Barat, Kalideres
                  </p>
                </div>

                {/* Calendar */}
                <div className="flex items-center gap-1 max-lg:hidden">
                  <Image
                    className="object-contain"
                    width={12}
                    height={12}
                    alt=".."
                    src="/svgs/calendar.svg"
                  />

                  <p className="h-full text-[10px] font-medium text-neutral-400 md:text-xs">
                    7 Aug
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kosong */}
          <div className=" h-full w-[49%] rounded-xl bg-[#282828] px-4 pb-4 max-md:hidden  ">
            <dir className=" flex h-[90%] w-full items-center justify-center rounded-xl border-2 border-dashed border-amber-400 border-opacity-25">
              <button>
                <Image width={48} height={48} alt=".." src="/svgs/plus.svg" />
              </button>
            </dir>
          </div>
        </div>
      </div>
    </>
  );
};

export default IklanSection;
