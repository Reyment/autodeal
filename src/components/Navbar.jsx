"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";

import { FaUnlockKeyhole } from "react-icons/fa6";

const Navbar = () => {
  let isLogged = true;

  const [profileClicked, setProfileClicked] = useState(false);

  const handleProfileClicked = useCallback(() => {
    setProfileClicked(!profileClicked);
  }, [profileClicked]);

  const profleClickedIcon = [
    { src: "/svgs/profile.svg", alt: "Profil" },
    { src: "/svgs/gear.svg", alt: "Pengaturan" },
    { src: "/svgs/help.svg", alt: "Bantuan" },
    { src: "/svgs/signOut.svg", alt: "Keluar" },
  ];

  return (
    <nav className="fixed top-0 z-10 flex w-screen items-center justify-center bg-white font-quicksand">
      {/* Navbar Content */}
      <div className="relative mx-3 w-full items-center justify-between  py-[18px] max-xl:px-[20px] max-md:flex-col md:flex xl:w-[1280px]">
        {/* Title */}
        <div className=" flex justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={158} height={28} />
          </Link>

          {/* Hamburger Icon */}
          <button>
            <Image
              width={22}
              height={22}
              className="sticky md:hidden"
              alt="hamburger"
              src="/images/hamburger-menu.png"
            />
          </button>
        </div>

        {/* Search */}
        <form
          action=""
          className="flex w-full gap-[2px] max-md:mt-[10px] md:w-[350px] xl:w-[600px]"
        >
          {/* Cari Lokasi */}
          <div className=" flex items-center rounded-bl-lg rounded-tl-lg bg-[#F4F5F7] text-xs">
            <div className="flex h-full items-center px-[10px]">
              <Image
                width={20}
                height={20}
                className="h-5 w-full object-contain"
                alt="map"
                src="/svgs/map.svg"
              />
            </div>
            <input
              className=" h-11 w-full bg-[#F4F5F7]  pl-2 text-sm font-light"
              type="text"
              placeholder="Indonesia"
            />
          </div>

          {/* Cari  Barang */}
          <div className=" flex w-full items-center gap-[2px] max-sm:rounded-br-lg max-sm:rounded-tr-lg">
            <input
              className="h-11 w-full bg-[#F4F5F7] pl-[16px] text-sm font-light max-sm:rounded-br-lg max-sm:rounded-tr-lg "
              type="text"
              placeholder="Cari yang kamu mau di sini..."
            />
            <div className="flex h-full items-center  rounded-br-lg rounded-tr-lg bg-[#F4F5F7] px-[16px] max-sm:hidden">
              <Image
                width={22}
                height={22}
                className="w-full object-contain"
                alt="search"
                src="/svgs/search.svg"
              />
            </div>
          </div>
        </form>

        {/* Login Button */}
        <div className="max-md:hidden">
          {isLogged ? (
            <div className="relative flex items-center gap-[30px]">
              {/* Profile Picture */}
              <button onClick={handleProfileClicked}>
                <Image
                  width={44}
                  height={44}
                  className="rounded-full"
                  src="/images/author.png"
                  alt="profile"
                />
              </button>

              {/* Profile Clicked */}
              {profileClicked && (
                <div className="absolute bottom-[-150px] right-[10px] h-[140px] w-[280px] rounded-lg border bg-white  p-[20px] max-lg:hidden">
                  {/* Halo Account */}
                  <div className="px-[15px]">
                    <h3 className="text-sm font-medium text-neutral-400">
                      Halo,
                    </h3>
                    <h3 className="text-base font-medium text-zinc-800">
                      Duran Slaytone
                    </h3>
                  </div>

                  <div className="mt-[14px] w-full border border-neutral-200" />

                  <div className="mt-2 flex w-full items-center justify-between px-[15px]">
                    {profleClickedIcon.map((icon, i) => (
                      <button
                        className="flex flex-col items-center justify-center gap-2"
                        key={i}
                      >
                        <Image
                          className="aspect-square object-contain"
                          width={20}
                          height={20}
                          alt={icon.alt}
                          src={icon.src}
                        />

                        <span className="text-[10px] font-semibold text-neutral-400">
                          {icon.alt}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="h-6 border border-neutral-200" />

              <Image
                width={20}
                height={20}
                alt="heart-outline"
                src="/svgs/heart-outline-navbar.svg"
              />

              <div className="relative">
                <Image width={20} height={20} alt="bell" src="/svgs/bell.svg" />
                <div className="absolute right-[0px] top-[-2px] h-2 w-2 rounded-full bg-rose-500" />
              </div>
            </div>
          ) : (
            <button
              className="flex items-center justify-center gap-2 rounded-lg bg-[#FCD02F]  p-[12px]  text-[14px] text-black"
              type="submit"
            >
              <FaUnlockKeyhole />
              <h5 className="text-sm font-semibold">Masuk/Daftar</h5>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
