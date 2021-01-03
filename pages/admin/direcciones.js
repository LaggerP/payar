import React, { useState } from 'react'

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
