import React from "react";
import NavbarShrink from "./NavbarShrink";

export default function NavbarFull() {
  return (
    <div className="overflow-x-auto">
      <ul className="flex px-4 py-4 space-x-6 space-y-6 text-slate-600  dark:text-white">
        <div className="md:hidden items-center">
          <NavbarShrink />
        </div>
        <div className="hidden md:block">
          <li>Features</li>
        </div>
        <div className="hidden md:block">
          <li>About</li>
        </div>
        <div className="hidden md:block">
          <li>Pricing</li>
        </div>
        <div className="hidden md:block">
          <li>Clients</li>
        </div>
        <div className="hidden md:block">
          <li>Contact</li>
        </div>
        <div className="hidden md:block">
          <button
            className="bg-purple-400 hover:bg-blue-500
           text-white font-semibold hover:text-white py-1 px-4 border
            border-white hover:border-transparent rounded"
          >
            Download
          </button>
        </div>
      </ul>
    </div>
  );
}
