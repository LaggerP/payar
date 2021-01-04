import React from 'react'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const LayourDirecciones = dynamic(() => import('../components/admin/Direcciones'))
import myGet from '../../api/myGet'


const Direcciones = (props) => {
  return (
    <>
      <NavBar uri="direcciones"/>
      <LayourDirecciones direcciones={props.data}/>
    </>
  )
}



Direcciones.getInitialProps = async props => {
  return await myGet(`http://localhost:3000/api/direcciones/`, props);
};


export default Direcciones