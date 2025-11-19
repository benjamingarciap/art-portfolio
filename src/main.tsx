import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArchivePage from './pages/ArchivePage'
import YearPage from './pages/YearPage'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/paintings/:year" element={<YearPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
