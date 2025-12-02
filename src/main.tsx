import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import YearPage from './pages/YearPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Landing from './pages/Landing'
import './index.css'

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
