import React, { useState } from 'react'
import Head from 'next/head'
import myGet from '../../api/myGet'

import Navbar from '../components/Navbar'
import CardCryptoAddress from '../components/CardCryptoAddress'
import FormNewAddress from '../components/FormNewAddress'

const Direcciones = (props) => {

  const { data } = props

  return (
    <>
      <Head>
        <title>Direcciones - Payar</title>
      </Head>
      <Navbar uri="direcciones" />
      <div className="container mx-auto">
        <div className="mt-10">
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
  const url = process.env.NODE_ENV === 'production' ? 'https://payar.vercel.app/api/direcciones/'  : 'http://localhost:3000/api/direcciones/'

  return await myGet(url, props);
};

export default Direcciones