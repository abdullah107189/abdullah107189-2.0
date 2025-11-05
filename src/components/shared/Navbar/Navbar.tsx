import Link from "next/link";
import "./Navbar.css";
const Navbar = () => {
  const navItems: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];
  return (
    <div
      className={`sticky z-50 top-0 border-b dark:border-gray-400 shadow-md`}
    >
      <nav className="backdrop-blur-sm shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-primary">MAAS</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 navbarA items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-2 transition duration-200 hover:text-[#60f318]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button className="ml-3 hover:text-[#60f318] focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu*/}
        {/* <div
          className={`-right-72 shadow-lg md:hidden absolute md:w-2/3 w-1/2 min-h-[300px] flex flex-col items-center justify-center text-center transform duration-300 rounded-lg z-50 navbarA p-3 space-y-5 pb-5`}
        >
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.name}`}
              href={item.href}
              className="relative px-2 transition duration-200 hover:text-[#60f318]"
            >
              {item.name}
            </Link>
          ))}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
