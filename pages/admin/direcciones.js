import React, { useState } from 'react'
import Link from 'next/link'
import {Navbar} from '../components/navbar'

import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('../components/navbar'))

export default function Direcciones() {
  return (
    <>
      <NavBar uri="direcciones"/>
      pepe
    </>



  )
}
