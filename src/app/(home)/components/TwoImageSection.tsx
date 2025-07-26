import Image from "next/image";

const TwoImageSection = ({ items }) => (
  <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-28 transition-opacity duration-200">
    {items.map((item, index) => (
      <div key={index} className={index > 0 ? "mt-8 md:mt-0" : ""}>
        <div className="flex-1 relative">
          <a href={item.href}>
            <Image
              className="block h-auto object-cover w-full"
              src={item.image}
              alt=""
              width={600}
              height={740}
            />
          </a>
        </div>
        <div className="box-border pt-6">
          <div className="mb-4 md:mb-6">
            <a
              className="font-condensed text-lg font-semibold tracking-wide uppercase text-decoration-none hover:underline"
              href={item.href}
            >
              {item.title}
            </a>
          </div>
          <div className="text-lg mb-8">{item.description}</div>
          <div>
            <a
              className="inline-block font-condensed text-lg tracking-wide uppercase text-decoration-none hover:underline active:underline"
              href={item.href}
            >
              <span className="inline-block transform -translate-y-1 mr-1">
                [
              </span>
              <span>{item.ctaText}</span>
              <span className="inline-block transform -translate-y-1 ml-1">
                ]
              </span>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TwoImageSection;
