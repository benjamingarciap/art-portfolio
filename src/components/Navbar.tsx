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

  const textColor = location.pathname === '/' ? 'text-[#F8F8F8]' : 'text-[#222]'
  const backgroundColor =
    location.pathname === '/'
      ? isMenuOpen
        ? 'bg-[#131313] transition-colors duration-1000'
        : 'bg-transparent backdrop-blur-[5px] [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)] h-[200px]'
      : 'bg-[#F8F8F8]'
  return (
    <>
      <nav
        className={clsx(
          backgroundColor,
          isSmallScreen ? 'py-5 px-9' : 'py-10 px-20',
          'flex justify-between fixed top-0 left-0 right-0 z-30 '
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
                'font-sans font-black text-[28px] uppercase p-0 relative z-50 tracking-tighter',
                textColor
              )}
            >
              {isSmallScreen ? (
                'BG'
              ) : (
                <div className="flex flex-col gap-0">
                  <span className="leading-none">Benjamin</span>
                  <span className="leading-none">Garcia</span>
                </div>
              )}
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
                {({ close, open }) => (
                  <>
                    <PopoverButton
                      className={clsx(
                        textColor,
                        location.pathname.startsWith('/paintings')
                          ? 'underline decoration-1 underline-offset-5'
                          : '',
                        'focus:outline-none hover:underline decoration-1 underline-offset-5 font-medium cursor-pointer',
                        open ? 'underline decoration-1 underline-offset-5' : ''
                      )}
                    >
                      Paintings
                    </PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="absolute left-0 mt-2 w-48 shadow-lg ring-opacity-5 z-30 bg-[rgba(0,0,0,0.9)] p-4"
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
                      ? 'underline decoration-1 underline-offset-5'
                      : '',
                    textColor,
                    'hover:underline decoration-1 underline-offset-5 font-medium'
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
