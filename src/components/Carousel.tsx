import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '../data/images.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import formatTitleAndDetailsWithYear from '../lib/formatTitleAndDetailsWithYear'

export default function Carousel({
  yearOfCreation,
}: {
  yearOfCreation?: string
}): React.ReactElement {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [yearOfCreation])
  return (
    <>
      <Swiper
        key={yearOfCreation}
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper transition-opacity duration-700 ease-out
        ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {images.map((img, index) => {
          const { title, details, year } = formatTitleAndDetailsWithYear(
            img.title
          )
          if (yearOfCreation && year.toString() !== yearOfCreation) {
            return null
          }
          return (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <img src={img.url} alt={img.title} />
              <div className="w-full mt-4 flex justify-start flex-col items-start gap-4">
                <p className="text-[14px] font-medium font-sans">{title}</p>
                <p className="text-[12px] font-light font-sans">{details}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
