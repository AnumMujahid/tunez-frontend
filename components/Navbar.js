import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 container mx-auto bg-black">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-9 h-9 mr-3" />
        <span className="text-white text-md font-semibold">Tunez</span>
      </div>
      <div className="px-4 pt-1 pb-2 text-white border border-white rounded-md text-sm">
        <Link href="#inputoutput">Generate Music</Link>
      </div>
    </nav>
  );
};

export { Navbar };
