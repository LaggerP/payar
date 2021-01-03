import React, { useState } from 'react'
import withPrivateRoute from '../components/withPrivateRoute';

import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('../components/navbar'))
const CobrosLoyaut = dynamic(() => import('../components/admin/cobros'))

const Cobros = () => {

  return (
    <>
      <NavBar uri="cobros" />
      <CobrosLoyaut />
    </>
  )
}
Cobros.getInitialProps = async props => {
  return {};
};

export default withPrivateRoute(Cobros);