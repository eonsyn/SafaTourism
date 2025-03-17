"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [openMobileBar, setOpenMobileBar] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="h-full w-24 flex items-center justify-center flex-col">
          <p className="leading-5 font-heading font-bold text-2xl">
            Safa 1<br />
            <span className="text-highlight">Tourism</span>
          </p>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Package", "Gallery"].map((item, index) => (
            <Link
              key={index}
              href={`#${item}`}
              className="text-white py-1 border-transparent border-b-2 hover:border-highlight transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div>
          <Link
            href="https://g.co/kgs/PLr6uxs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 rounded-md border border-orange-100 text-white hover:bg-orange-100 hover:text-black transition-all duration-200">
              Discover Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <RxHamburgerMenu
            onClick={() => setOpenMobileBar(true)}
            className="text-2xl cursor-pointer"
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {openMobileBar && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg flex flex-col items-start p-6 space-y-6 text-white md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setOpenMobileBar(false)}
              >
                <IoMdClose />
              </button>

              {/* Mobile Links */}
              {["Home", "Package", "Gallery"].map((item, index) => (
                <Link
                  onClick={() => setOpenMobileBar(false)}
                  key={index}
                  href={`#${item}`}
                  className="text-white py-1 border-transparent border-b-2 hover:border-highlight transition-all duration-200"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
