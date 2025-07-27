import RightArrow from "@/components/ui/RightArrow";

function HeroSection() {
  return (
    <div className="  bg-red-50 relative">
      <div className=" absolute w-full h-full bg-black/50 text-white flex items-center">
        <div className="flex flex-col justify-center gap-2   relative box-border mx-auto  max-w-[1550px] w-[94%]  md:px-0 lg:px-8 xl:px-0 py-5">
          <h2 className="md:text-6xl text-3xl  uppercase font-bold">15% Off</h2>
          <h2 className="md:text-6xl text-3xl uppercase  font-light mb-2">
            Find your favorite clothes
          </h2>
          <div>
            <button className="group flex gap-3 items-center   uppercase text-black  bg-white hover:text-white hover:bg-black transition-all duration-300 px-14 mt-3 font-semibold py-3 cursor-pointer">
              Shop Now{" "}
              <RightArrow className="group-hover:translate-x-3 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://fashionisers.com/wp-content/uploads/2025/01/fashionable-man.jpg"
        alt="hero image"
        className="object-cover w-full h-[600px] md:object-center md:object-top object-left"
      />
    </div>
  );
}
export default HeroSection;
