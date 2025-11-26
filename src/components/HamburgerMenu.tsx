import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

type HamburgerMenuProps = {
  isOpen: boolean
  toggleMenu: () => void
  setIsOpen: (open: boolean) => void
}

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps): React.ReactElement {
  const location = useLocation()
  const buttonColor = location.pathname === '/' ? 'bg-white' : 'bg-black'

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
    </>
  )
}
