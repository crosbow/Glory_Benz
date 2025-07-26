import ArrowIcon from "@/components/ArrowIcon";

const FooterAccordion = ({ title, links, isOpen, onToggle }) => (
  <div className="border-t border-gray-300 md:border-none">
    <button
      type="button"
      className="md:hidden block relative w-full py-4 font-condensed text-lg font-normal tracking-wide uppercase text-left"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <div>{title}</div>
      <ArrowIcon
        direction="left"
        className={`absolute right-1 top-1/2 transform -translate-y-1/2 transition-transform ${
          isOpen ? "rotate-90" : "-rotate-90"
        }`}
      />
    </button>
    <div className="hidden md:block font-condensed text-lg tracking-wide uppercase mb-8">
      {title}
    </div>
    <ul
      className={`
      md:block overflow-hidden transition-all duration-200
      ${isOpen ? "max-h-[35rem] py-2 pb-6" : "max-h-0 md:max-h-none"}
    `}
    >
      {links.map((link, index) => (
        <li key={index} className={index > 0 ? "mt-1 md:mt-1" : ""}>
          <a
            className="inline-block text-decoration-none hover:underline text-sm md:text-base leading-relaxed md:leading-normal"
            href={link.href}
            {...(link.external && { rel: "noopener nofollow" })}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterAccordion;
