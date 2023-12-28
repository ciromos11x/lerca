"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Subentri from './Subentri'
import Footer from '../components/Footer'

export default function page() {
    return (
      <div>
            <>
            <Navbar />
            <Subentri />
            <Footer />
            </>
      </div>
    )
  }
  