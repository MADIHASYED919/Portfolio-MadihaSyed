


import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

import { FaBars } from "react-icons/fa";
import Logo from "./logo";
import "./navbar.css"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 w-full bg-black/50 text-white z-[999] shadow-md ">

      {/* <div className="max-w-6xl mx-auto flex justify-between items-center p-4"> */}
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 ">

        {/* Logo */}
        {/* <h1 className="text-xl font-bold">Madiha</h1> */}
        <a href="#home">
  <Logo />
</a>

        {/* <img
          src={bootstrap}
          alt="logo"
          className="h-10 w-10 rounded-full"
        /> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">

          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#journey" className="nav-link">Journey</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>

        </ul>
<ThemeToggle />

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-700 w-full"> */}
        {menuOpen && (
  <div className="md:hidden fixed top-[72px] left-0 w-full bg-black border-t border-gray-700">

          <ul className="flex flex-col items-center gap-6 py-6">

            <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
            <li><a href="#journey" onClick={()=>setMenuOpen(false)}>Journey</a></li>
            <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>

          </ul>
            

        </div>


      )}

    </nav>



</>
  );
}