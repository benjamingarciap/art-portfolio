import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import images from '../data/images.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css'

// import required modules
import { Navigation } from 'swiper/modules'

function formatTitleAndDetails(slug: string) {
  // Replace hyphens with spaces first
  const withSpaces = slug.replace(/-/g, ' ')

  // Find where size/medium info starts (first digit)
  const match = withSpaces.match(/\d.*$/)

  let titlePart = withSpaces
  let detailsPart = ''

  if (match) {
    const index = match.index!
    titlePart = withSpaces.slice(0, index).trim()
    detailsPart = withSpaces.slice(index).trim()
  }

  // Capitalize only first letter of title, keep rest lowercase
  const capitalizedTitle =
    titlePart.charAt(0).toUpperCase() + titlePart.slice(1).toLowerCase()

  // Extract measurements and rest from detailsPart
  const measurementMatch = detailsPart.match(/^([\d\scmx\.]+)(.*)$/i)

  if (!measurementMatch) {
    // No measurements found, capitalize first letter of detailsPart only
    const capitalizedDetails =
      detailsPart.charAt(0).toUpperCase() + detailsPart.slice(1)
    return { title: capitalizedTitle, details: capitalizedDetails.trim() }
  }

  const measurements = measurementMatch[1].trim() // e.g. "90 5cm x 113cm"
  let rest = measurementMatch[2].trim() // e.g. "oil on canvas"

  if (!rest) {
    // No description after measurements
    return { title: capitalizedTitle, details: measurements }
  }

  // Capitalize only first word of rest
  const firstSpaceIndex = rest.indexOf(' ')
  if (firstSpaceIndex === -1) {
    // Only one word after measurements
    rest = rest.charAt(0).toUpperCase() + rest.slice(1)
  } else {
    const firstWord = rest.slice(0, firstSpaceIndex)
    const remaining = rest.slice(firstSpaceIndex)
    rest = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + remaining
  }

  // Add dash between measurements and first word of rest
  const finalDetails = `${measurements} - ${rest}`

  return { title: capitalizedTitle, details: finalDetails }
}

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => {
          const { title, details } = formatTitleAndDetails(img.title)
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
