import React, { useState } from 'react'
import Head from 'next/head'
import myGet from '../../api/myGet'

import Navbar from '../components/Navbar'
import CardProduct from '../components/CardProduct'

import ReactModal from 'react-modal';

const Productos = (props) => {

   const { data } = props
   const [showModal, setShowModal] = useState(false)

   const openModal = () => !showModal ? setShowModal(true) : setShowModal(false)

   return (
      <>
         <Head>
            <title>Productos - Payar</title>
         </Head>
         <Navbar uri="productos" />

         <div className="m-10 grid gap-x-2 md:gap-y-5 md:grid-cols-2 xl:gap-x-8 xl:gap-y-5 xl:grid-cols-4">
            <div class="flex p-6">
               <div class="flex justify-center items-center w-full bg-indigo-50 hover:bg-indigo-100 rounded-lg" onClick={openModal}>
                  <svg class="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

               </div>

               <ReactModal
                  isOpen={showModal}
                  contentLabel="Minimal Modal Example"
               >
                  <section class="py-40 bg-gray-100  bg-opacity-50 h-screen">
                     <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                        <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-600 rounded-t">
                           <div class="max-w-sm mx-auto md:w-full md:mx-0">
                              <div class="inline-flex items-center space-x-4">
                                 <svg className="w-6 h-6 stroke-current text-indigo-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

                                 <h1 class="text-gray-600">Formulario de creación de un nuevo producto</h1>
                              </div>
                           </div>
                        </div>
                        <div class="bg-white space-y-6">
                           <div class="space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                              <div className="flex flex-col">
                                 <div class="w-full max-w-sm mx-auto">
                                    <label class="text-sm text-gray-400">Nombre</label>
                                    <div class="w-full inline-flex border">
                                       <input
                                          type="text"
                                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="Café con Leche"
                                       />
                                    </div>
                                 </div>
                                 <div class="md:w-2/3 max-w-sm mx-auto">
                                    <label class="text-sm text-gray-400">Descripción</label>
                                    <div class="w-full inline-flex border">
                                       <input
                                          type="text"
                                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="Café con Leche hecho en máquina expreso"
                                       />
                                    </div>
                                 </div>
                                 <div class="md:w-2/3 max-w-sm mx-auto">
                                    <label class="text-sm text-gray-400">Precio</label>
                                    <div class="w-full inline-flex border">
                                       <input
                                          type="number"
                                          class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="$90"
                                       />
                                    </div>
                                 </div>
                                 <div class="md:w-2/3 max-w-sm mx-auto">
                                    <label class="text-sm text-gray-400">Imagen</label>
                                    <div class="w-full inline-flex border">
                                       <input type='file' id='single' class="w-11/12 focus:outline-none focus:text-gray-600 p-2"  />
                                    </div>
                                 </div>
                              </div>

                           </div>

                           

                          
                           <div class="w-full p-4 text-right text-gray-500">
                              <button onClick={openModal} class="cursor-pointer inline-flex items-center focus:outline-none mr-4">
                                 <svg
                                    fill="none"
                                    class="w-4 mr-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                 </svg>
              Cancelar creación
            </button>
                           </div>
                        </div>
                     </div>
                  </section>

               </ReactModal>
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