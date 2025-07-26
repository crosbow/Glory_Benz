import Image from "next/image";

const ProductTile = ({ product, className = "" }) => (
  <div className={`relative opacity-100 ${className}`}>
    <div className="relative overflow-hidden">
      <a
        className="block text-decoration-none"
        aria-label={product.title}
        href={product.href}
      >
        <div className="relative">
          <div className="block relative pb-[133%]">
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
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 ease-in-out md:group-hover:opacity-100"
                width={300}
                height={400}
              />
            )}
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
export default ProductTile;
