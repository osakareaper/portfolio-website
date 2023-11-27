"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }

]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#181818] bg-opacity-90'>
      {/* Navbar */}

      <div className='flex flex-wrap items-center justify-between mx-auto px-6 py-4 md:py-8'>
        {/* Logo */}
        <Link href={"/"}>
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#ec5389] to-[#f0256c] font-extrabold text-3xl md:text-4xl'>
            OSK&reg;
          </span>
        </Link>

        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ?
              (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-2 py-2 border rounded border-[--text-secondary] text-[--text-secondary] hover:text-[--text-primary]  hover:border-[--text-primary]'>
                  <Bars3Icon className='w-5 h-5' />
                </button>
              ) :
              (
                <button onClick={() => setNavbarOpen(false)} className='flex items-center px-2 py-2 border rounded border-[--text-secondary] text-[--text-secondary] hover:text-[--text-primary]  hover:border-[--text-primary]'>
                  <XMarkIcon className='w-5 h-5' />
                </button>
              )
          }
        </div>

        <div className='menu hidden md:block md:w-auto' id='navbar'>

          <ul className='flex md:flex-row md:space-x-8 mt-0 p-1 md:p-0'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>

        </div>
      </div>

      {
        navbarOpen ? <MenuOverlay links={navLinks} /> : null
      }

    </nav>
  )
}

export default Navbar