"use client";

import { useState } from "react";
import FooterAccordion from "../FooterAccordions";
import AboutShop from "./AboutShop";

const footerSectionsContent = [
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

const FooterSections = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-4 gap-12 mt-32 md:mt-14">
      <AboutShop />

      {footerSectionsContent.map((section, index) => (
        <FooterAccordion
          key={index}
          title={section.title}
          links={section.links}
          isOpen={openAccordions[index]}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </nav>
  );
};
export default FooterSections;
