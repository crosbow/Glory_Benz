"use client";

import { useState } from "react";
import FooterAccordion from "./FooterAccordions";

const Footer = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const footerSections = [
    {
      title: "About",
      links: [
        { text: "About Us", href: "/our-story" },
        { text: "Our Stores", href: "/our-stores" },
        {
          text: "Desk Fashion Knitting Mills",
          href: "/buck-mason-knitting-mills",
        },
        { text: "Careers", href: "/careers" },
        { text: "Gift Cards", href: "/products/gift" },
        { text: "Site Map", href: "/sitemap" },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "Contact Us", href: "/faq" },
        {
          text: "Instagram",
          href: "https://instagram.com/deckfashion",
          external: true,
        },
        {
          text: "Facebook",
          href: "https://www.facebook.com/deckfashion",
          external: true,
        },
        { text: "Affiliates", href: "/affiliates" },
        {
          text: "Catalog Opt-Out",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSfT8cwcMjVR9Hh8BeWFZ_RmeGb0TKgKkRNfGDuImenLaXksRA/viewform?fbzx=6450071408919949252",
          external: true,
        },
        { text: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Account",
      links: [
        {
          text: "Log-In",
          href: "https://orders.deckfashion.com/auth",
          external: true,
        },
        {
          text: "Returns + Exchanges",
          href: "https://orders.deckfashion.com/returns",
          external: true,
        },
        {
          text: "Track Package",
          href: "https://orders.deckfashion.com/",
          external: true,
        },
        { text: "Gift Card Balance", href: "/gift-card-balance" },
      ],
    },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-white border-t border-gray-300 text-lg mt-24">
      <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 border border-gray-300 border-l-0 border-r-0 border-t-0 my-14 py-14 md:my-14 md:py-14">
        <div className="mb-14 md:mb-0 order-0 md:flex items-center gap-5">
          <label htmlFor="email" className="block mb-4 sm:text-nowrap">
            Sign Up for Complimentary Shipping and the Latest News
          </label>
          <div className="2xl:mx-30" />
          <div className="flex w-full">
            <input
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              id="email"
              name="email"
              required
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              autoComplete="email"
              placeholder="Email"
            />
            <button
              type="submit"
              aria-label="Sign up"
              className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <nav className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-4 gap-12 mt-32 md:mt-14">
        <div className="md:row-span-2 order-4 md:order-none mt-16 md:mt-0 grid-cols-2 md:grid-cols-1">
          <div className="font-condensed text-lg tracking-wide uppercase mb-8 md:mb-8">
            Come Visit Us
          </div>
          <div className="text-[80px] font-extrabold -mt-10">DeCK</div>
          <div className="font-condensed text-lg tracking-wide uppercase mt-4">
            <p>
              <a
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
              </a>
            </p>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <FooterAccordion
            key={index}
            title={section.title}
            links={section.links}
            isOpen={openAccordions[index]}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </nav>

      <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 flex flex-col md:flex-row mt-14">
        <div className="flex-1 order-1 md:order-none border-t border-gray-300 md:border-none py-4 md:py-0">
          <div className=" ">
            <ul className="space-y-4 flex gap-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className=" text-sm leading-none text-decoration-none hover:underline"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-sm  font-condensed  tracking-wide uppercase border-t border-gray-300 md:border-none py-12 md:py-0 order-0">
          © Deck Fashion. All Rights Reserved
          <br />
          2025
        </div>
      </div>
    </footer>
  );
};
export default Footer;
