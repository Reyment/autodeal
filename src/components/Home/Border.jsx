import React from "react";
import Image from "next/image";

const Border = () => {
  return (
    <>
      <div className="relative mt-[30px] flex h-[30px] w-full items-start justify-center">
        <Image alt=".." src="/svgs/border.svg" width={100} height={6} />

        <button className="active:scale-95">
          <Image
            alt=".."
            src="/svgs/plus.svg"
            width={50}
            height={50}
            className="absolute right-[-2em]"
          />
        </button>
      </div>
    </>
  );
};

export default Border;
