import React from 'react'
// import Carousel from '../components/Carousel'
import Swiper from '../components/Swiper'
import { useParams } from 'react-router-dom'

export default function YearPage(): React.ReactElement {
  const year = useParams().year
  return (
    <div className="archive-page flex items-center justify-center min-h-screen pl-6">
      {/* <Carousel /> */}
      <Swiper yearOfCreation={year} />
    </div>
  )
}
