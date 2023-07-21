import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-12 md:h-20 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-lg">
        FOODIE
      </Link>
      <p>ALL RIGHTS RESERVED. 2023</p>
    </div>
  );
};

export default Footer;
