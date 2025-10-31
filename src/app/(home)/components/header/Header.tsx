import MenuIcon from "@/components/ui/MenuIcon";
import Logo from "./Logo";
import Navigation from "./Navigation";
import RightContent from "./RightContent";
import TopBanner from "./TopBanner";

function Header() {
  return (
    <>
      <TopBanner />

      <header className="bg-white  shadow-xs">
        <div className="flex items-center justify-between relative box-border mx-auto max-w-[1550px] w-[94%]  md:px-0 lg:px-8 xl:px-0 py-5">
          {/* menu */}
          <div className="sm:hidden">
            <button>
              <MenuIcon />
            </button>
            <div className="mr-20" />
          </div>
          <div className="flex  gap-6 items-center">
            <Logo />
            <Navigation />
          </div>
          <RightContent />
        </div>
      </header>
    </>
  );
}
export default Header;
