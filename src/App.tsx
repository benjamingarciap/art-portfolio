import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function App(): React.ReactElement {
  return (
    <div className="bg-[#F8F8F8]">
      <Navbar />
      <Outlet />
    </div>
  )
}
