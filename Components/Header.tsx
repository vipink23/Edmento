"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-8 py-4 bg-gray-50">
        <Link className="text-blue-900 font-bold text-3xl" href={"/Dashboard"}>EDMENTO LEARNING</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <div className="text-blue-900 cursor-pointer">About</div>
          <div className="text-blue-900 cursor-pointer">Career</div>
          <div className="text-blue-900 cursor-pointer">Academics</div>
          <button className="bg-blue-600 text-white px-2 py-1 rounded-sm font-bold w-fit">
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900 text-3xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 px-8 py-4 space-y-3 absolute right-0 top-full w-48 shadow-lg">
          <div className="text-blue-900 cursor-pointer">About</div>
          <div className="text-blue-900 cursor-pointer">Career</div>
          <div className="text-blue-900 cursor-pointer">Academics</div>
          <button className="bg-blue-600 text-white px-2 py-1 rounded-sm font-bold w-fit">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};


