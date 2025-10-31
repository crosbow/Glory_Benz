import Link from "next/link";

const LegalLinks = () => {
  const legalLinks = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ];

  return (
    <div className="flex-1 order-1 md:order-none border-t border-gray-300 md:border-none py-4 md:py-0">
      <div className=" ">
        <ul className="space-y-4 flex gap-3">
          {legalLinks.map((link, index) => (
            <li key={index}>
              <Link
                className=" text-sm leading-none text-decoration-none hover:underline"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LegalLinks;
