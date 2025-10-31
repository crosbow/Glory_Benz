"use client";

import SearchIcon from "@/components/ui/SearchIcon";
import ShoppingCartIcon from "@/components/ui/ShoppingCartIcon";
import UserIcon from "@/components/ui/UserIcon";
import XIcon from "@/components/ui/XIcon";
import { useState } from "react";

const RightContent = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);

  const handleOpenSearchInput = (e) => {
    setOpenSearchInput((prev) => !prev);
  };

  return (
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
  );
};
export default RightContent;
