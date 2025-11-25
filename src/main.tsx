import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ArchivePage from './pages/ArchivePage'
import YearPage from './pages/YearPage'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Landing from './pages/Landing'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/paintings/:year" element={<YearPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/newsletter" element={<Newsletter />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/archive" element={<ArchivePage />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// )
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout wrapper (Navbar, footer, etc.)
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'paintings/:year', element: <YearPage /> },
      // { path: 'archive', element: <div>Archive</div> },
    ],
  },
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
