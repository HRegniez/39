import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="galerie">Galerie</NavLink>
            <NavLink to="evenements">Evenements</NavLink>
            <NavLink to="rendez-vous">Rendez-vous</NavLink>
            <NavLink to="shop">Shop</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
