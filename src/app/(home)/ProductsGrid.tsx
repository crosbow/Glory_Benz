import ProductTile from "@/components/ProductTile";

const ProductsGrid = ({ title, products }) => (
  <div className="border-t border-b border-gray-300 py-24 md:py-24 mt-16 md:mt-28">
    <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 mb-6">
      <div className="flex-1 font-condensed text-xl font-semibold tracking-wide uppercase min-h-[1.35em]">
        {title}
      </div>
    </div>
    <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[1.25vw]">
        {products.map((product, index) => (
          <div key={index} className="opacity-100 group">
            <ProductTile product={product} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductsGrid;
