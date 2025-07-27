"use client";

import MenuIcon from "@/components/ui/MenuIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ShoppingCartIcon from "@/components/ui/ShoppingCartIcon";
import UserIcon from "@/components/ui/UserIcon";
import XIcon from "@/components/ui/XIcon";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const navigation = [
    { id: 1, label: "Home", href: "/home" },
    { id: 2, label: "Shop", href: "/all_product" },
    { id: 3, label: "Know Deck", href: "/know_deck" },
  ];

  const handleOpenSearchInput = (e) => {
    setOpenSearchInput((prev) => !prev);
  };

  return (
    <>
      {/* header banner */}
      <div className="bg-[#F3F1EF]  ">
        <div className=" max-w-[1550px] w-[94%] flex items-center  relative  mx-auto justify-center   md:px-0 lg:px-8 xl:px-0 py-1.5">
          {/* <p className="flex gap-2 items-center text-xs">
            <PhoneIcon /> (939) 353-1107
          </p> */}
          <p className="text-xs font-semibold text-center">
            Shipping On Us Over $150 & 365-Day Returns
          </p>
        </div>
      </div>

      <header className="bg-white  shadow-xs">
        <div className="flex items-center justify-between relative box-border mx-auto max-w-[1550px] w-[94%]  md:px-0 lg:px-8 xl:px-0 py-5">
          {/* menu */}
          <div className="sm:hidden">
            <button>
              <MenuIcon />
            </button>
            <div className="mr-20" />
          </div>
          <div className="flex  gap-6 items-center">
            {/* brand */}
            <div className="text-2xl font-bold ">DeCK</div>

            {/* navigation */}
            <div className="sm:flex justify-center items-center gap-4 font-semibold   hidden  text-[14px]  uppercase">
              {navigation.map((nav) => (
                <Link key={nav.id} href={nav.href} className="hover:underline">
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>

          {/* others icon */}
          <div className="flex md:gap-4 gap-3 relative">
            <input
              className={` px-4 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black absolute right-30 -top-1 w-0 transition-all duration-200 opacity-0 z-40  ${
                openSearchInput && "opacity-100 w-[400px]"
              }`}
              type="text"
              disabled={!openSearchInput}
              name="search"
              required
              spellCheck="true"
              placeholder="Search product..."
            />
            <button className="cursor-pointer" onClick={handleOpenSearchInput}>
              {openSearchInput ? <XIcon /> : <SearchIcon />}
            </button>
            <UserIcon />
            <ShoppingCartIcon />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
