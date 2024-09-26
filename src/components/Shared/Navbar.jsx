import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { IoCartOutline, IoSearchSharp  } from "react-icons/io5";

const Navbar = () => {
    return (
     <div className='bg-base-100 text-slate-900'>
           <div className="navbar container mx-auto">
        <div className="navbar-start">
        <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
          </Link>
         
        </div>
        <div className="navbar-center hidden lg:flex">
         <div className="flex items-center space-x-6">
         {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
         </div>
        </div>
        <div className="navbar-end gap-2">
        <IoCartOutline className="text-xl"/>
        <IoSearchSharp className="text-xl"/>
        <a className="btn btn-outline btn-primary px-8">Appointment</a>
        <Link href="/login" className="btn btn-primary px-8">Login</Link>
        </div>
      </div>
     </div>
    );
};
const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "MyBookings",
      path: "/my-bookings",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  

export default Navbar;