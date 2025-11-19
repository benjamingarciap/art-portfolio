import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

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
          <Popover className="relative z-11">
            <PopoverButton className="focus:outline-none hover:text-gray-400 font-light">
              Paintings
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              // className="flex flex-col justify-center items-center py-4 bg-amber-700 w-40 "
              className="absolute left-0 mt-2 w-48 shadow-lg  ring-opacity-5 z-20 bg-gray-800 p-4"
            >
              <div className="flex flex-col w-full gap-4 ">
                {[
                  '2025',
                  '2024',
                  '2023',
                  '2022',
                  '2021',
                  '2020',
                  '2018',
                  '2017',
                  '2016',
                  '2015',
                  '2014',
                  '2013',
                ].map((item) => (
                  <a
                    key={item}
                    className="text-white"
                    href={`/paintings/${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </li>
        {/* <li>
          <a href="/archive" className=" hover:text-gray-400 font-light">
            Archive
          </a>
        </li> */}
        {/* <li>
          <a href="drawings" className=" hover:text-gray-400 font-light">
            Drawings
          </a>
        </li> */}
        <li>
          <a href="/store" className=" hover:text-gray-400 font-light">
            Store
          </a>
        </li>
        <li>
          <a href="/about" className=" hover:text-gray-400 font-light">
            About
          </a>
        </li>
        <li>
          <a href="/newsletter" className=" hover:text-gray-400 font-light">
            Newsletter
          </a>
        </li>
        <li>
          <a href="/contact" className=" hover:text-gray-400 font-light">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
