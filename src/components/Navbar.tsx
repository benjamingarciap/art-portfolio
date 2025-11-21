import React, { useState, useEffect, use } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { clsx } from 'clsx'

export default function Navbar(): React.ReactElement {
  const location = useLocation()
  const textColor = location.pathname === '/' ? 'text-white' : 'text-black'

  console.log(location)
  return (
    <nav className=" p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="">
        {/* <button onClick={() => handleClick()} className="cursor-pointer"> */}
        <Link to="/" className="cursor-pointer">
          <h1
            className={clsx(
              'font-sans font-normal text-[34px] uppercase tracking-widest',
              textColor
            )}
          >
            Benjamin Garcia
          </h1>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Popover className="relative z-11">
            {({ close }) => (
              <>
                <PopoverButton
                  // className="focus:outline-none text-white hover:text-gray-400 font-light cursor-pointer "
                  className={clsx(
                    textColor,
                    'focus:outline-none hover:text-gray-400 font-light cursor-pointer'
                  )}
                >
                  Paintings
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  className="absolute left-0 mt-2 w-48 shadow-lg ring-opacity-5 z-20 bg-gray-800 p-4"
                >
                  <div className="flex flex-col w-full gap-4">
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
                      <Link
                        key={item}
                        className="text-white hover:text-gray-400"
                        to={`/paintings/${item.toLowerCase()}`}
                        onClick={() => close()} // <-- call close here
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </li>
        {['about', 'newsletter', 'contact'].map((item, key) => (
          <li key={key}>
            <Link
              to={`/${item}`}
              className={clsx(textColor, ' hover:text-gray-400 font-light')}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
