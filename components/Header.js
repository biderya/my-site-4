import React from "react";
import Link from "next/link";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "#contact",
    },
  ];
  return (
    <header className=" bg-green-50 sticky top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-grey-light  hover:shadow-sm hover:!bg-white-off hover:text-grey-dark hover:text">
      <div className="container container--wide py-3">
        <div className="flex items-center">
          <div className="w-1/2">
            <nav className="w-[123px] block">Punchlist Usa</nav>
          </div>
          <div className="flex-auto w-full flex justify-center">
            <nav>
              <ul className="hidden lg:flex lg:space-x-6 xl:space-x-8">
                {navLinks.map((link, index) => (
                  <span key={index}>
                    {" "}
                    <Link href={link.path}  passHref>
                      <li className="leading-none hover:cursor-pointer">
                        {link.name}
                      </li>
                    </Link>
                  </span>
                ))}
              </ul>
            </nav>
          </div>

          <div className="w-1/2">
            <nav className="hidden lg:flex items-center justify-end space-x-7">
              Contact Us
              <button className=" bg-blue-600  h-12 overflow-hidden py-3 px-5 min-w-[140px] rounded-3xl text-white font-bold mx-5 hover:bg-[#1A2A55] ">
                <div className="transform hover:-translate-y-16 transition duration-500 ease-in-out flex flex-col">
                  <span className="">Get started</span>
                  <span className=" pt-10">Get started-1</span>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
