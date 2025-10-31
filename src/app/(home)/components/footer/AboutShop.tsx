import Link from "next/link";

const AboutShop = () => {
  return (
    <div className="md:row-span-2 order-4 md:order-none mt-16 md:mt-0 grid-cols-2 md:grid-cols-1">
      <div className="font-condensed text-lg tracking-wide uppercase mb-8 md:mb-8">
        Come Visit Us
      </div>
      <div className="text-[80px] font-extrabold -mt-10">Glory Fashion</div>
      <div className="font-condensed text-lg tracking-wide uppercase mt-4">
        <p>
          <Link
            href="/pages/our-stores"
            className="text-decoration-none hover:underline"
          >
            <span className="inline-block transform -translate-y-1 mr-1">
              [
            </span>
            <span>Find Us</span>
            <span className="inline-block transform -translate-y-1 ml-1">
              ]
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AboutShop;
