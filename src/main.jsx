import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './global.css'
import About from './components/About.jsx'
import Data from './components/Data.jsx'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/about", element: <About />},
  {path:"/credentials", element: <Data />},
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
