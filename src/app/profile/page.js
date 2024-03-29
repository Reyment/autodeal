import HeaderProfil from "./headerProfil";
import ContentProfil from "./contentProfil";
import SideBarProfil from "./sideBarProfil";
import FooterProfil from "./footerProfil";
import Endpoint from "./endpoint";
import { getAllData } from "@/libs/api-libs";
import data from "@/app/profile/cars.json";

import Category from "@/components/Category";

export default async function Page() {
  const products = await data;

  return (
    <div className="overflow-x-hidden background bg-[#F4F5F7]">
      <HeaderProfil />
      <Category />
      <Endpoint />
      <div className="mb-[103px] px-[20px] lg:px-0 lg:gap-[20px] lg:flex lg:mx-auto grid gap-[10px] lg:max-w-[1280px]">
        <SideBarProfil />
        <ContentProfil api={products} />
      </div>
      <FooterProfil />
    </div>
  );
}
