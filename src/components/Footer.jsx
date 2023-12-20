import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socmeds = [
    { src: "/svgs/facebook.svg", alt: "facebook" },
    { src: "/svgs/instagram.svg", alt: "instagram" },
    { src: "/svgs/youtube.svg", alt: "youtube" },
    { src: "/images/tiktok.png", alt: "tiktok" },
  ];

  const autodeals = [
    { title: "Tentang Kami", href: "/" },
    { title: "Pusat Bantuan", href: "/" },
    { title: "Syarat & Ketentuan", href: "/" },
    { title: "Kebijakan Privasi", href: "/" },
  ];

  return (
    <>
      <div className="mt-[60px] flex w-full flex-col items-center font-quicksand max-[850px]:hidden">
        {/* Atas */}
        <div className="flex h-[122px] w-full items-center justify-between bg-white px-20 max-lg:px-[20px]">
          {/* Ikuti Kami */}
          <div>
            <h3 className=" text-sm font-semibold text-zinc-800">Ikuti Kami</h3>
            {/* Socmed */}
            <div className="mt-[10px] flex gap-[18px]">
              {socmeds.map((socmed, i) => (
                <Image
                  className="aspect-square object-contain "
                  key={i}
                  alt={socmed.alt}
                  src={socmed.src}
                  width={18}
                  height={18}
                />
              ))}
            </div>
          </div>

          {/* Autodeal */}
          <div className="ml-[5em] flex flex-col items-center">
            <h3 className="text-sm font-semibold text-zinc-800">Autodeal</h3>

            <div className="mt-3 flex gap-[20px] md:gap-[20px]">
              {autodeals.map((item, i) => (
                <Link
                  className="text-center text-xs text-neutral-400"
                  alt={item.title}
                  href={item.href}
                  key={i}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Download */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-zinc-800">
              Download Aplikasi Autodeal
            </h3>

            <div className="mt-2 flex gap-[5px] object-contain">
              <Image
                width={100}
                height={35}
                alt="palystore"
                src="/images/playstore.png"
              />
              <Image
                width={100}
                height={35}
                alt="appstore"
                src="/images/appstore.png"
              />
            </div>
          </div>
        </div>

        {/* Bawah */}
        <div className="flex h-10 w-full items-center justify-center gap-2 text-xs font-semibold text-neutral-400">
          Copyright © 2023
          <span className=" text-xs font-semibold text-yellow-500">
            autodeal.id
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
