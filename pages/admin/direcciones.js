import React, { useState } from 'react'
import myGet from '../../api/myGet'

import Navbar from '../components/Navbar'
import CardCryptoAddress from '../components/CardCryptoAddress'
import FormNewAddress from '../components/FormNewAddress'

const Direcciones = (props) => {

  const { data } = props

  return (
    <>
      <Navbar uri="direcciones" />
      <div class="container mx-auto">
        <div class="mt-10">
          <h3 className="text-xl mb-4 ml-2 md:ml-1">Direcciones actuales:</h3>
          <div className="flex flex-wrap ">
            {
              (data.length !== 0) ?
                data.map((direccion, idx) => {
                  return <CardCryptoAddress key={idx} data={direccion} />
                })
                :
                <h1>Ninguna</h1>
            }
          </div>
          <FormNewAddress />
        </div>
      </div>
    </>
  )
}

Direcciones.getInitialProps = async props => {
  return await myGet(`http://localhost:3000/api/direcciones/`, props);
};

export default Direcciones