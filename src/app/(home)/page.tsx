import CarouselSection from "./components/CarouselSection";
import HeroSection from "./components/HeroSection";
import TwoImageSection from "./components/TwoImageSection";
import ProductsGrid from "./components/ProductsGrid";

export default function Home() {
  const newArrivals = [
    {
      title: "Sodapop Seersucker Camp Shirt",
      price: "$158",
      color: "blue/white stripe",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13375.1080BWTST_BLUE-WHITE-STRIPE-SODAPOP-SEERSUCKER-CAMP-SHIRT.jpg?v=1752776153&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13375.1080BWTST_SODAPOP-SEERSUCKER-CAMP-SHIRT_BLUE-WHITE-STRIPE_1641.jpg?v=1752776218&format=webp&width=600&height=600",
      href: "/products/blue-white-stripe-sodapop-seersucker-camp-shirt",
    },
    {
      title: "Casita Camp Shirt",
      price: "$168",
      color: "white",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13437.1345WHT_WHITE-CASITA-CAMP-SHIRT.jpg?v=1750703823&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13437.1345WHT_CASITA-CAMP-SHIRT_WHITE_1723-1.jpg?v=1750703823&format=webp&width=600&height=600",
      href: "/products/white-casita-camp-shirt",
    },
    {
      title: "Capitola Linen Carry-On Larsen Short",
      price: "$138",
      color: "dress navy",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM14134.1066DNY_DRESS-NAVY-CAPITOLA-LINEN-CARRY-ON-LARSEN-SHORT.jpg?v=1747096977&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/WOVEN-SHORT_CAPITOLA-LINEN-CARRY-ON-LARSEN-SHORT_DRESS-NAVY_2925.jpg?v=1747096977&format=webp&width=600&height=600",
      href: "/products/dress-navy-capitola-linen-carry-on-larsen-short",
    },
  ];

  const summerCollection = [
    {
      title: "Yuma Hemp Cotton Classic Tee",
      price: "$55",
      color: "soft cedar",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM11030.512SCD_Yuma-Hemp-Classic-Tee_SOFT-CEDAR_f712b31c-09d5-4f04-a78c-cead22a4dcb6.jpg?v=1741388902&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM11030.512SCD_SOFT-CEDAR-YUMA-HEMP-CLASSIC-TEE_SOFT-CEDAR_2881.jpg?v=1741388902&format=webp&width=600&height=600",
      href: "/products/soft-cedar-yuma-hemp-classic-tee",
    },
    {
      title: "Newport Nylon Swim Short",
      price: "$148",
      color: "navy",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM14147.1088_NEWPORT-NYLON-SWIM-SHORT_NAVY.jpg?v=1745866106&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/SWIM-SHORT_NEWPORT-NYLON-SWIM-SHORT_NAVY_1312_d71dcc47-cd73-4c9b-8344-bae29e4204ae.jpg?v=1748488327&format=webp&width=600&height=600",
      href: "/products/navy-newport-nylon-swim-short",
    },
    {
      title: "Daybreak Knit Rower",
      price: "$148",
      color: "heather oat",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM16371.534HOA_DAYBREAK-KNIT-ROWER_HEATHER-OAT.jpg?v=1752875365&format=webp&width=600&height=600",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM16371.534HOA_DAYBREAK-KNIT-ROWER_HEATHER-OAT_2358.jpg?v=1752875365&format=webp&width=600&height=600",
      href: "/products/heather-oat-daybreak-knit-rower",
    },
  ];

  const bestSellers = [
    {
      title: "Wornwell One Pocket Shirt",
      price: "$148",
      color: "azure end on end",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13450.978AZUEOE_AZURE-END-ON-END-WORNWELL-ONE-POCKET-SHIRT_865370ec-2131-47ff-b9f0-beefff54e444.jpg?v=1747350331",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM13450.978AZUEOE_WORNWELL-ONE-POCKET-SHIRT_AZURE-END-ON-END_2447_624b9d02-7919-463b-8000-16840aee10b8.jpg?v=1747350501",
      href: "/products/azure-end-on-end-wornwell-one-pocket-shirt",
    },
    {
      title: "Japanese Loomstate Selvedge Ford Standard Jean",
      price: "$248",
      color: "d018",
      image:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM12125.789_Selvedge-Ford-Standard-Jean_D018_2.jpg?v=1739820211",
      image2:
        "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/BM12125.789D018_Japanese_Loomstate_Selvedge_Ford_Standard_Jean_D018_5263.jpg?v=1739820211",
      href: "/products/d018-japanese-loomstate-selvedge-ford-standard-jean",
    },
  ];

  const twoImageSections = [
    [
      {
        title: "Red Rabbit Trading Co. x Deck Shopping",
        description:
          "A limited run of five heirloom-quality silver pieces, created in collaboration with Red Rabbit Trading Co.",
        ctaText: "Shop The Collaboration",
        image:
          "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/P2_RedRabbit.jpg?v=1753318394&format=webp&width=900&height=900",
        href: "/collections/red-rabbit-for-buck-mason",
      },
      {
        title: "Japanese Deluxe Linen",
        description:
          "Custom-spun in Japan from a superfine blend of cotton and linen.",
        ctaText: "Shop Tees",
        image:
          "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/P3_f2ce112b-c2f1-4728-bb39-237d4a50d01d.jpg?v=1753492032&format=webp&width=900&height=900",
        href: "/collections/mens-tees",
      },
    ],
    [
      {
        title: "The Seersucker Carry-On",
        description: "Everyday tailoring in Japanese-milled seersucker.",
        ctaText: "Shop Bestsellers",
        image:
          "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/P5_52ac0f0e-b8b7-41ca-8473-ef7e9dfc4fb2.jpg?v=1753204175&format=webp&width=900&height=900",
        href: "/collections/best-sellers",
      },
      {
        title: "Summer Indigo",
        description: "A classic double-V crew, dip-dyed in rich indigo.",
        ctaText: "Shop Indigo",
        image:
          "https://cdn.shopify.com/s/files/1/0123/5065/2473/files/P6_3568a3a6-3d1f-4c38-8eaf-ad6e10b5d397.jpg?v=1753155647&format=webp&width=900&height=900",
        href: "/collections/indigo",
      },
    ],
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <main>
        <div className="min-h-[90vh]">
          <CarouselSection
            title="Shop New Arrivals"
            titleHref="/collections/mens-new-arrivals"
            products={newArrivals}
          />

          <TwoImageSection items={twoImageSections[0]} />

          <CarouselSection
            title=""
            products={summerCollection}
            showTitle={false}
          />

          <TwoImageSection items={twoImageSections[1]} />

          <ProductsGrid title="Shop Bestsellers" products={bestSellers} />
        </div>
      </main>
    </div>
  );
}
