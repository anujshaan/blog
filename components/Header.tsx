'use client'

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";


import BlogLogo from '../assets/BlogLogo.jpeg'

const Header = () => {
  const [showNav, setShowNav] = useState(false)


  return (
    <div className="shadow-lg px-4 sm:px-16 py-4 mb-16">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            className="w-20 h-24 rounded-full"
            src={BlogLogo}
            alt="logo"
          />
          <h2 className="md:block hidden text-3xl font-bold font-logo">Anuj Shaan Blog's</h2>
        </Link>
        {
          showNav ? (
            <div className="flex items-center space-x-12 text-lg tracking-wider font-extralight text-gray-600">
              <Link href='/' className="nav-links">Portfolio</Link>
              <Link href='/' className="nav-links">Support</Link>
              <Link href='/' className="nav-links">Subscribe</Link>
              <XMarkIcon className="w-8 h-6 cursor-pointer" onClick={()=> setShowNav(false)}/>
            </div>
          ) : (
            <div className="w-8 h-8 cursor-pointer " onClick={()=> setShowNav(true)}>
              <Bars3Icon/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header