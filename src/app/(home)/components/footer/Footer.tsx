import FooterSections from "./FooterSections";
import LegalLinks from "./LegalLinks";
import Rights from "./Rights";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-lg mt-24">
      <SubscribeForm />
      <FooterSections />

      <div className="relative box-border mx-auto  max-w-[1550px] w-[94%] px-4 md:px-0 lg:px-8 xl:px-0 flex flex-col md:flex-row mt-14">
        <LegalLinks />
        <Rights />
      </div>
    </footer>
  );
};
export default Footer;
