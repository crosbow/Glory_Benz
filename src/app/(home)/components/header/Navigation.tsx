import Link from "next/link";

const Navigation = () => {
  const navigation = [
    { id: 1, label: "Home", href: "/home" },
    { id: 2, label: "Shop", href: "/products" },
    { id: 3, label: "Know Glory", href: "/know-us" },
  ];
  return (
    <div className="sm:flex justify-center items-center gap-4 font-semibold   hidden  text-[14px]  uppercase">
      {navigation.map((nav) => (
        <Link key={nav.id} href={nav.href} className="hover:underline">
          {nav.label}
        </Link>
      ))}
    </div>
  );
};
export default Navigation;
