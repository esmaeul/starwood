"use client";
import logo from "../../public/logo.png";
import { FaBars } from "react-icons/fa6";
import NavbarLg from "./components/reusedComponents/navbar/NavbarLg";
import NavbarSm from "./components/reusedComponents/navbar/NavbarSm";
import "./globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // Sections Transitions
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (enteries, observer) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
  // End section transtions

  return (
    <html lang="en">
      <body className="flex flex-col overflow-x-hidden w-screen">
        <header className="fixed top-0 w-full bg-globalColor5 shadow-md min-h-24 z-40">
          <div className="container flex items-center md:justify-normal justify-between min-h-full transition">
            {/* Start Logo */}
            <Link href="/">
              <Image src={logo} alt="logo" width={96} height={96} />
            </Link>
            {/* End Logo */}
            <div
              className="bg-globalColor0 md:hidden block text-globalColor8 p-3 text-xl rounded-sm cursor-pointer"
              onClick={handleShowMenu}
            >
              <FaBars />
            </div>
            <NavbarLg />
            <NavbarSm
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              handleShowMenu={handleShowMenu}
            />
            <div
              className={` absolute left-0 top-0 h-full bg-black opacity-10 z-10 ${
                showMenu ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        </header>
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
