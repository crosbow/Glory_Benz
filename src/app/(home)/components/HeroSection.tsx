function HeroSection() {
  return (
    <div className="  bg-red-50 relative">
      <div className=" absolute w-full h-full bg-black/50 text-white flex items-center">
        <div className="flex flex-col justify-center gap-2   relative box-border mx-auto  max-w-[1550px] w-[94%]  md:px-0 lg:px-8 xl:px-0 py-5">
          <h2 className="text-5xl  uppercase font-bold">
            Welcome To Deck Store
          </h2>
          <h2 className="text-2xl uppercase font-semibold">
            Look good, feel good <br /> do good.
          </h2>
          <div>
            <button className="uppercase border-[1.5px] hover:bg-white/20 transition-all duration-150 px-14 mt-3 font-semibold py-2 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/fe/49/cd/fe49cd51c3b4df8b5031a8139e67a91b.jpg"
        alt="hero image"
        className="object-cover w-full h-[600px]"
      />
    </div>
  );
}
export default HeroSection;
