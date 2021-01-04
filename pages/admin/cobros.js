import React, { useState } from 'react'

import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('../components/Navbar'))
const CobrosLoyaut = dynamic(() => import('../components/admin/Cobros'))

import myGet from '../../api/myGet'


const Cobros = (props) => {

  return (
    <>
      <NavBar uri="cobros" />
      <CobrosLoyaut direcciones={props.data}/>
    </>
  )
}
Cobros.getInitialProps = async props => {
  return await myGet(`http://localhost:3000/api/direcciones/`, props);
};

export default Cobros;