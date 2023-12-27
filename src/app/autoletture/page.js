"use client"
import React from 'react'
import Autoletture from './Autoletture'
import NavbarAutoletture from './NavbarAutoletture'
import Footer from '../components/Footer'
import Come from './Come'

export default function page() {
  return (
    <div>
      <NavbarAutoletture />
        <Autoletture  />
        <Come />
    </div>
  )
}
