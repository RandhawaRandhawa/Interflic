import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; 
const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-Transparent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false); 
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); 
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setBgColor("bg-White shadow-lg text-Accent2");
      } else {
        setBgColor("bg-Transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen); 
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen); 
  };
  
  const toggleBlogDropdown = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen); 
  };

  return (
    <>
      <header
        className={`fixed z-50 w-full transition duration-300 ${bgColor}`}
      >
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full py-4">
            <div className="md:flex md:items-center md:gap-12">
              <Link to={"/"} className="flex items-center">
              <h1 className="text-2xl font-medium text-Black font-title">Interflic.</h1>
              </Link>
            </div>

            <div className="hidden lg:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 font-normal text-md font-para">
                  <li>
                    <Link
                      to={"/ServicesPage"}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/AboutUsPage"}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/PortfolioPage"}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/PricingPage"}     
                    >
                    Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/BlogPage"}
                    >
                    Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="hidden lg:flex">
                <button>
                  <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Accent2 hover:bg-Black">
                    <div className="flex items-center justify-center p-2">
                      <Link
                        to={"/ContactUsPage"}
                        className="font-medium text-md text-White font-title"
                      >
                      Book a consultation
                      </Link>
                    </div>
                  </div>
                </button>
              </div>

              <div className="block lg:hidden">
                <button onClick={toggleSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
