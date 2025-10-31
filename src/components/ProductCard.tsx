import Image from "next/image";
import DetailsIcon from "./ui/DetailsIcon";
import HeartIcon from "./ui/HeartIcon";

const ProductCard = ({ product, className = "" }) => (
  <div className={`relative opacity-100 ${className}`}>
    <div className="relative overflow-hidden">
      <a
        className="block text-decoration-none"
        aria-label={product.title}
        href={product.href}
      >
        <div className="relative">
          <div className="block relative pb-[133%] transition-all duration-700">
            <Image
              src={product.image}
              alt="Product Flat"
              className="absolute inset-0 w-full h-full object-cover"
              width={300}
              height={400}
            />
            {product.image2 && (
              <Image
                src={product.image2}
                alt={product.alt2}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-in-out md:group-hover:opacity-100 "
                width={300}
                height={400}
              />
            )}
            <div className="bg-black/10 opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-end">
              <div>
                <ul className="flex gap-3 mb-5 justify-center">
                  <li
                    className="bg-[#ededed] text-[#b56c22] p-1.5 rounded-full flex justify-center items-center - 
                    transition-all duration-700 "
                  >
                    <HeartIcon />
                  </li>

                  <li
                    className="bg-[#ededed] text-[#b56c22] p-1.5 rounded-full flex justify-center items-center  
                     transition-all duration-700 "
                  >
                    <DetailsIcon />
                  </li>
                </ul>
                <button className="bg-[#b56c22] px-4 text-white uppercase cursor-pointer mb-5 text-xs font-semibold py-2 translate-y-1 group-hover:translate-y-0 transition-all duration-700">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className="grid grid-cols-1 pt-2 gap-3">
      <div className="flex items-start gap-6 leading-none">
        <a
          className="flex-1 font-condensed text-lg font-semibold tracking-wide uppercase leading-tight text-decoration-none hover:underline active:underline"
          href={product.href}
        >
          {product.title}
        </a>
        <div className="flex-none text-lg leading-tight">
          <span>{product.price}</span>
        </div>
      </div>
      <div className="flex items-start text-gray-600 text-sm min-h-4 capitalize">
        {product.color}
      </div>
    </div>
  </div>
);
export default ProductCard;
