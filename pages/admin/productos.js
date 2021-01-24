import React, { useState } from 'react'
import Head from 'next/head'
import myGet from '../../api/myGet'

import Navbar from '../components/Navbar'
import CardCryptoAddress from '../components/CardCryptoAddress'
import FormNewAddress from '../components/FormNewAddress'
import CardProduct from '../components/CardProduct'

const Productos = (props) => {

   const { data } = props

   return (
      <>
         <Head>
            <title>Productos - Payar</title>
         </Head>
         <Navbar uri="productos" />

         <div className="m-10 grid gap-x-2 md:gap-y-5 md:grid-cols-2 xl:gap-x-8 xl:gap-y-5 xl:grid-cols-4">
            <div class="flex p-6 ">
              
               <div class="flex justify-center items-center w-full bg-indigo-50 hover:bg-indigo-100 rounded-lg">
                  <svg class="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              
               </div>
            </div>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />


         </div>

      </>
   )
}

Productos.getInitialProps = async props => {
   const url = process.env.NODE_ENV === 'production' ? 'https://payar.vercel.app/api/direcciones/' : 'http://localhost:3000/api/direcciones/'

   return await myGet(url, props);
};

export default Productos