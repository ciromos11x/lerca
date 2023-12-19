"use client"
import React from 'react'
import Subentri from './Subentri'
import NavbarSubentri from './NavbarSubentri'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
      <NavbarSubentri />
        <Subentri  />
        <Footer />
    </div>
  )
}
