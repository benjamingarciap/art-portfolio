import React, { useEffect, useState } from 'react'
// import Carousel from '../components/Carousel'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'

export default function YearPage(): React.ReactElement {
  // const [visible, setVisible] = useState(false)
  // useEffect(() => {
  //   setVisible(true)
  // }, [])
  // const visibilityClass = visible ? 'opacity-100' : 'opacity-0'
  const year = useParams().year
  return (
    <div
      className={`flex items-center justify-center min-h-screen pl-10
 
      `}
    >
      {/* <Carousel /> */}
      <Carousel key={year} yearOfCreation={year} />
    </div>
  )
}
