import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'

type HamburgerMenuProps = {
  isOpen: boolean
  toggleMenu: () => void
}

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps): React.ReactElement {
  const location = useLocation()
  const buttonColor = location.pathname === '/' ? 'bg-white' : 'bg-black'
  const bgColor = location.pathname === '/' ? 'bg-black' : 'bg-white'
  const textColor = location.pathname === '/' ? 'text-white' : 'text-black'
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const navigation = useNavigation()

  // useEffect(() => {
  //   if (navigation.state === 'loading') {
  //     setIsMenuOpen(false)
  //   }
  // }, [navigation.state])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-40"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 ${buttonColor} transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`flex items-center justify-center absolute top-0 h-screen left-0 right-0 ${bgColor} shadow-lg z-30`}
        >
          <nav className="flex flex-col items-center p-4 space-y-4">
            <Link
              to="/about"
              onClick={toggleMenu}
              className={`${textColor} text-lg hover:text-gray-600 transition`}
            >
              About
            </Link>
            <Link
              to="/archive"
              onClick={toggleMenu}
              className={`${textColor} text-lg hover:text-gray-600 transition`}
            >
              Archive
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`${textColor} text-lg hover:text-gray-600 transition`}
            >
              Contact
            </Link>
            <Link
              to="/newsletter"
              onClick={toggleMenu}
              className={`${textColor} text-lg hover:text-gray-600 transition`}
            >
              Newsletter
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
