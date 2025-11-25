import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { clsx } from 'clsx'

type HamburgerMenuProps = {
  isOpen: boolean
  toggleMenu: () => void
}

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps): React.ReactElement {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const location = useLocation()
  const buttonColor = location.pathname === '/' ? 'bg-white' : 'bg-black'
  const bgColor = location.pathname === '/' ? 'bg-black' : 'bg-white'
  const textColor = location.pathname === '/' ? 'text-white' : 'text-black'
  useEffect(() => {
    function checkHeight() {
      const small = window.innerHeight <= 667
      setIsSmallScreen(small)
      console.log('Height check:', window.innerHeight, small)
    }
    checkHeight()
    window.addEventListener('resize', checkHeight)
    return () => window.removeEventListener('resize', checkHeight)
  }, [])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-40 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={clsx(
            'absolute inset-0 z-30 shadow-lg overflow-y-auto h-screen',
            bgColor
          )}
        >
          {/* <ul className="flex flex-col items-center p-8 space-y-6 pt-[163px]"> */}
          <ul
            className={clsx(
              'flex flex-col items-center p-8 space-y-6',
              isSmallScreen ? 'pt-[163px]' : 'pt-[265px]'
            )}
          >
            {/* Paintings Dropdown */}
            <li className="w-full text-center">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton
                      className={clsx(
                        textColor,
                        'font-bold text-[3em] hover:text-gray-400 transition'
                      )}
                    >
                      Paintings
                    </DisclosureButton>

                    <DisclosurePanel className="mt-6 flex flex-col items-center space-y-4">
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
                      ].map((year) => (
                        <Link
                          key={year}
                          to={`/paintings/${year.toLowerCase()}`}
                          className={clsx(
                            textColor,
                            'text-[2.5em] font-light hover:text-gray-400 transition'
                          )}
                          onClick={toggleMenu}
                        >
                          {year}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </li>

            {/* Other Links */}
            {['about', 'newsletter', 'contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  onClick={toggleMenu}
                  className={clsx(
                    textColor,
                    'font-bold text-[3em] hover:text-gray-400 transition'
                  )}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
