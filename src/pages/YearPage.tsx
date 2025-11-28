import React, { useEffect, useState } from 'react'
// import Carousel from '../components/Carousel'
import Carousel from '../components/Carousel'
import { useNavigation, useParams, useLocation } from 'react-router-dom'
import MobileImageGrid from '../components/MobileImageGrid'

export default function YearPage(): React.ReactElement {
  const year = useParams().year
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

  return (
    <div
      className={`flex items-center justify-center min-h-screen scroll-auto overflow-auto pt-20`}
    >
      {/* <Carousel /> */}
      {isSmallScreen ? (
        <MobileImageGrid key={year} yearOfCreation={year} />
      ) : (
        <Carousel key={year} yearOfCreation={year} />
      )}
    </div>
  )
}
