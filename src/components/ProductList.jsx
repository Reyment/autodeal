import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

const ProductList = ({ textIklan, lihatSemua, srcImage }) => {
  return (
    <>
      <div className="flex justify-between font-quicksand">
        <div className="flex gap-2">
          {srcImage && (
            <Image
              src={srcImage}
              alt=""
              width={24}
              height={24}
              className="object-contain"
            />
          )}
          <h2 className="text-xl font-semibold text-[#333333]">{textIklan}</h2>
        </div>

        <a href="">{lihatSemua}</a>
      </div>

      <div className="mt-[30px] flex flex-wrap justify-between md:gap-[20px]">
        {/* Map */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductList;
