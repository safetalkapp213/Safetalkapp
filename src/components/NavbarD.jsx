import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const NavbarD = () => {
  return (
    <>
      <header className="flex justify-between bg-white/70 backdrop-blur sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl px-4 h-16 flex items-center justify-between">
          <div aria-hidden>
            <img
              src="../assets/safetalk-logo.png"
              alt="Safetalk Logo"
              className="h-10 ml-6"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3 mr-10 text-[#1F3A57]">
  <button className="border border-gray-300 rounded-md px-6 py-1.5 text-[16px]">
    Find Therapists
  </button>

  <div className="flex items-center gap-2 border-2 border-gray-300 shadow-md rounded-md px-3 py-1.5 text-[16px]">
    <UserCircleIcon className="w-6 h-6 text-[#1F3A57]" />
    <span>Ola Yin</span>
  </div>
</nav>

      </header>
    </>
  );
};

export default NavbarD;