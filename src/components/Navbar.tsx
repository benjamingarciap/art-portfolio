import React from 'react'

export default function Navbar(): React.ReactElement {
  return (
    <nav className=" p-4 flex justify-between items-center fixed top-0 left-0 right-0 bg-white z-10">
      <div className="">
        <a href="/">
          <h1 className="font-sans font-normal text-[34px] uppercase tracking-widest">
            Benjamin Garcia
          </h1>
        </a>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="archive" className=" hover:text-gray-400 font-light">
            Archive
          </a>
        </li>
        <li>
          <a href="drawings" className=" hover:text-gray-400 font-light">
            Drawings
          </a>
        </li>
        <li>
          <a href="store" className=" hover:text-gray-400 font-light">
            Store
          </a>
        </li>
        <li>
          <a href="about" className=" hover:text-gray-400 font-light">
            About
          </a>
        </li>
        <li>
          <a href="newsletter" className=" hover:text-gray-400 font-light">
            Newsletter
          </a>
        </li>
        <li>
          <a href="contact" className=" hover:text-gray-400 font-light">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
