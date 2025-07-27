import ProductCard from "@/components/ProductCard";
import FilterBar from "./components/FilterBar";

function page() {
  const products = [
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
  return (
    <div className="mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 mt-8">
      <div>
        <div className="flex-1 text-center font-condensed text-2xl font-semibold tracking-wide uppercase min-h-[1.35em]">
          All Clothing
        </div>
      </div>

      <div className=" mt-5 md:mt-10 flex md:relative static">
        <FilterBar />
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[1.25vw]">
            {products.map((product, index) => (
              <div key={index} className="opacity-100 group">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;
