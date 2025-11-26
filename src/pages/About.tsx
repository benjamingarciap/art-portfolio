import React from 'react'
import AboutInfo from '../components/AboutInfo'
export default function About(): React.ReactElement {
  return (
    <div className="h-screen w-full flex justify-center items-center scroll-auto overflow-auto">
      <AboutInfo />
    </div>
  )
}
