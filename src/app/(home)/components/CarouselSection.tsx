"use client";

import ArrowIcon from "@/components/ArrowIcon";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const CarouselSection = ({ title, titleHref, products, showTitle = true }) => {
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  return (
    <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-0 md:px-0 lg:px-8 xl:px-0 mt-16 md:mt-16 pt-0">
      <div className="max-w-screen-sm:px-4">
        {showTitle && (
          <div className="flex gap-8 mb-6">
            <div className="flex-1">
              {titleHref ? (
                <a
                  className="font-condensed text-xl font-semibold tracking-wide uppercase min-h-[1.35em] text-decoration-none hover:underline active:underline"
                  href={titleHref}
                >
                  {title}
                </a>
              ) : (
                <div className="font-condensed text-xl font-semibold tracking-wide uppercase min-h-[1.35em]">
                  {title}
                </div>
              )}
            </div>
            <div className="hidden md:flex flex-none">
              <button
                type="button"
                className={`bg-white text-black text-xs leading-none px-4 transition-opacity duration-200 z-10 ${
                  !canScrollBack
                    ? "opacity-20 pointer-events-none"
                    : "opacity-100 hover:bg-white"
                }`}
                aria-label="Scroll Back"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                className={`bg-white text-black text-xs leading-none px-4 transition-opacity duration-200 z-10 ${
                  !canScrollForward
                    ? "opacity-20 pointer-events-none"
                    : "opacity-100 hover:bg-white"
                }`}
                aria-label="Scroll Forward"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-hidden w-full">
        <div className="md:grid grid-cols-4  gap-6 pb-8 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-1 min-w-[25%] md:min-w-[calc(25%-1.5rem)] lg:min-w-[80%] opacity-100 group"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile arrows */}
      <button
        type="button"
        className={`md:hidden absolute left-0 top-[46%] transform -translate-y-1/2 bg-white text-black leading-none p-4 z-10 transition-opacity duration-200 ${
          !canScrollBack
            ? "opacity-0 pointer-events-none"
            : "opacity-100 hover:bg-white"
        }`}
        aria-label="Scroll Back"
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        className={`md:hidden absolute right-0 top-[46%] transform -translate-y-1/2 bg-white text-black leading-none p-4 z-10 transition-opacity duration-200 ${
          !canScrollForward
            ? "opacity-0 pointer-events-none"
            : "opacity-100 hover:bg-white"
        }`}
        aria-label="Scroll Forward"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
};
export default CarouselSection;
