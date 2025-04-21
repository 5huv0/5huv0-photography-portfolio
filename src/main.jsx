import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import NavAboutMe from '../pages/NavAboutMe.jsx'
import NavContact from '../pages/NavContact.jsx'
import NavMyWorks from '../pages/NavMyWorks.jsx'
import NavWorkExp from '../pages/NavWorkExp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
      <Route path = '/' element={<Home/>}/>
      <Route path = 'navaboutme' element={<NavAboutMe/>}/>
      <Route path = 'navcontact' element={<NavContact/>}/>
      <Route path = 'navmyworks' element={<NavMyWorks/>}/>
      <Route path = 'navworkexp' element={<NavWorkExp/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
