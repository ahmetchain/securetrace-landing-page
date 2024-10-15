import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed py-5 top-0 left-0 w-full z-10 flex justify-between items-center lg:px-32 md:px-16 px-4 transition-all duration-300 ${
        scrolled ? "bg-gray-800/50 shadow-md" : ""
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center">
        <h1 className="text-[11px] sm:text-sm md:text-base lg:text-xl font-semibold text-white">
          Secure <span className="text-blue-500">Trace</span>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-x-5">
          <li className="cursor-pointer text-[9px] md:text-sm lg:text-base font-semibold text-white">
            HOME
          </li>
          <a href="https://wa.me/905304200064" target="_blank">
            <li className="flex items-center cursor-pointer text-[9px] md:text-sm lg:text-base font-semibold text-white opacity-80">
              CONTACT
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
