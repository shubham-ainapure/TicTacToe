import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Grid from './Components/Grid.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/grid',
    element:<Grid/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
