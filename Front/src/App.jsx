import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Galerie from './pages/Galerie'
import RootLayout from './assets/RootLayout'
import Evenements from './pages/Evenements'
import RendezVous from './pages/RendezVous'
import Shop from './pages/Shop'

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="galerie" element={<Galerie/>}/>
      <Route path="evenements" element={<Evenements/>}/>
      <Route path="rendez-vous" element={<RendezVous/>}/>
      <Route path="shop" element={<Shop/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
