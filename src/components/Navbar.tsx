import React, { useEffect, useState } from 'react'
import { useLocation, Link, useNavigation } from 'react-router-dom'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { clsx } from 'clsx'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'

export default function Navbar(): React.ReactElement {
  const navigation = useNavigation()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function checkLoading() {
      if (navigation.state === 'loading') {
        setIsMenuOpen(false) // close ONLY when navigation happens
        console.log('Navigation loading - closing menu ', navigation.state)
      }
    }
    function checkWidth() {
      const small = window.innerWidth <= 815
      setIsSmallScreen(small)
      if (!small) setIsMenuOpen(false) // close menu on large screen
    }
    checkLoading()
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [navigation.state])

  const textColor = location.pathname === '/' ? 'text-white' : 'text-black'
  const backgroundColor =
    location.pathname === '/' ? 'bg-transparent' : 'bg-white'

  return (
    <>
      <nav
        className={clsx(
          backgroundColor,
          'pt-3 px-5 flex justify-between fixed top-0 left-0 right-0 z-30'
        )}
      >
        <div>
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <h1
              className={clsx(
                'font-sans font-normal text-[28px] uppercase tracking-widest p-0 relative z-50',
                textColor
              )}
            >
              {isSmallScreen ? 'BG' : 'Benjamin Garcia'}
            </h1>
          </Link>
        </div>
        {isSmallScreen ? (
          <HamburgerButton
            isOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen((open) => !open)}
            setIsOpen={setIsMenuOpen} // <-- Pass setIsOpen here
          />
        ) : (
          <ul className="flex space-x-4">
            <li>
              <Popover className="relative z-20">
                {({ close }) => (
                  <>
                    <PopoverButton
                      className={clsx(
                        textColor,
                        location.pathname.startsWith('/paintings')
                          ? 'underline decoration-2 underline-offset-8'
                          : '',
                        'focus:outline-none hover:text-gray-400 font-light cursor-pointer'
                      )}
                    >
                      Paintings
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="absolute left-0 mt-2 w-48 shadow-lg ring-opacity-5 z-30 bg-gray-800 p-4"
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
                            onClick={() => close()}
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
                  className={clsx(
                    location.pathname === `/${item}`
                      ? 'underline decoration-2 underline-offset-8'
                      : '',
                    textColor,
                    'hover:text-gray-400 font-light'
                  )}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen((open) => !open)}
        setIsOpen={setIsMenuOpen}
      />
    </>
  )
}
