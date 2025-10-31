import PhoneIcon from "@/components/ui/PhoneIcon";

const TopBanner = () => {
  return (
    <div className="bg-[#F3F1EF]  ">
      <div className=" max-w-[1550px] w-[94%] flex items-center  relative  mx-auto justify-center   md:px-0 lg:px-8 xl:px-0 py-1.5">
        <p className="flex gap-2 items-center text-xs">
          <PhoneIcon /> (+880) 13136-98464
        </p>
        <p className="text-xs font-semibold text-center">
          Shipping On Us Over $150 & 365-Day Returns
        </p>
      </div>
    </div>
  );
};
export default TopBanner;
