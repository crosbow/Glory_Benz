import MenuIcon from "@/components/ui/MenuIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ShoppingCartIcon from "@/components/ui/ShoppingCartIcon";
import UserIcon from "@/components/ui/UserIcon";
import Link from "next/link";

function Header() {
  const navigation = [
    { id: 1, label: "Home", href: "/home" },
    { id: 2, label: "T-Shirts", href: "/t-shirt" },
    { id: 2, label: "Products", href: "/products" },
    { id: 3, label: "Know Deck", href: "/know-deck" },
  ];

  return (
    <>
      {/* header banner */}
      <div className="bg-[#F3F1EF] ">
        <div className=" max-w-[1550px] w-[94%] flex items-center  relative  mx-auto justify-center   md:px-0 lg:px-8 xl:px-0 py-1.5">
          {/* <p className="flex gap-2 items-center text-xs">
            <PhoneIcon /> (939) 353-1107
          </p> */}
          <p className="text-xs font-semibold text-center">
            Shipping On Us Over $150 & 365-Day Returns
          </p>
        </div>
      </div>

      <header className="bg-white ">
        <div className="flex items-center justify-between relative box-border mx-auto max-w-[1550px] w-[94%]  md:px-0 lg:px-8 xl:px-0 py-5">
          {/* menu */}
          <div className="sm:hidden">
            <button>
              <MenuIcon />
            </button>
            <div className="mr-20" />
          </div>
          <div className="flex  gap-6 items-center">
            {/* brand */}
            <div className="text-2xl font-bold ">DeCK</div>

            {/* navigation */}
            <div className="sm:flex justify-center items-center gap-4 font-semibold   hidden  text-[14px]  uppercase">
              {navigation.map((nav) => (
                <Link key={nav.id} href={nav.href} className="hover:underline">
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>

          {/* others icon */}
          <div className="flex md:gap-4 gap-3">
            <SearchIcon />
            <UserIcon />
            <ShoppingCartIcon />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
