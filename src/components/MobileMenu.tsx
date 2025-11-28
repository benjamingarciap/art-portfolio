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
  setIsOpen: (open: boolean) => void
}

export default function MobileMenu({
  isOpen,
  toggleMenu,
  setIsOpen,
}: HamburgerMenuProps): React.ReactElement {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const location = useLocation()
  const bgColor = location.pathname === '/' ? 'bg-[#131313]' : 'bg-[#F8F8F8]'
  const textColor = location.pathname === '/' ? 'text-white' : 'text-black'
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    function visibility() {
      if (isOpen) {
        setVisible(false)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setVisible(true)
          })
        })
      } else {
        setVisible(false)
      }
    }
    visibility()
  }, [isOpen])

  useEffect(() => {
    function checkHeight() {
      const small = window.innerHeight <= 667 || window.innerHeight === 740
      setIsSmallScreen(small)
      console.log('Height check hamburger:', window.innerHeight, small)
    }
    checkHeight()
    window.addEventListener('resize', checkHeight)
    return () => window.removeEventListener('resize', checkHeight)
  }, [])

  // Close menu after navigation completes (URL changes)
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [location.pathname])

  return (
    <div>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className={clsx(
            'absolute inset-0 z-29 shadow-lg overflow-y-auto h-screen',
            bgColor,
            `transition-opacity duration-300 ease-out
        ${visible ? 'opacity-100' : 'opacity-0'}`
          )}
        >
          <ul
            className={clsx(
              'flex flex-col items-center p-8 space-y-6',
              isSmallScreen ? 'pt-[163px]' : 'pt-[265px]'
            )}
          >
            {/* Paintings Dropdown */}
            <li className="w-full text-center m-0">
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

                    <DisclosurePanel
                      static
                      className={clsx(
                        'mt-6 flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-out',
                        open
                          ? 'max-h-[950px] opacity-100 pointer-events-auto'
                          : 'max-h-0 opacity-0 pointer-events-none'
                      )}
                    >
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
                          onClick={() => {
                            if (
                              location.pathname ===
                              '/paintings/' + year.toLowerCase()
                            ) {
                              toggleMenu()
                            }
                          }}
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
                  className={clsx(
                    textColor,
                    'font-bold text-[3em] hover:text-gray-400 transition'
                  )}
                  onClick={() => {
                    if (location.pathname === '/' + item) {
                      toggleMenu()
                    }
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
