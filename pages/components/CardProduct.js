import React, { useState } from 'react'

import ReactModal from 'react-modal';

const CardProduct = (props) => {

   const {product_name, product_description, product_price} = props.data

   const contentType = 'application/json'

   const [message, setMessage] = useState('');
   const [showDialog, setShowDialog] = useState(false);

   const deleteProduct = async () => {
      try {
         const res = await fetch('/api/productos', {
            method: 'DELETE',
            headers: {
               Accept: contentType,
               'Content-Type': contentType,
            },
            body: JSON.stringify({ idProduct: props.data._id }),
         })
         if (!res.ok) {
            throw new Error(res.status)
         }
      } catch (error) {
         setMessage('Fallo al eliminar producto')
      }
   }

   return (
      <>
         <div class="flex p-6 ">
            <div class="flex-none w-44 relative">
               <img src="https://images.unsplash.com/photo-1553531152-e0757d8c0e92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="absolute inset-0 w-full h-full object-cover rounded-l-lg" />
            </div>
            <div class="flex-auto pl-6 bg-indigo-50 rounded-r-lg">
               <div class="flex flex-wrap items-baseline">
                  <h1 class="w-full flex-none font-semibold mb-2.5 mt-2.5">
                     {product_name}
                  </h1>
                  <div class="text-4xl leading-7 font-bold text-indigo-600">
                     ${product_price}
                  </div>
               </div>
               <div class="flex items-baseline text-xs my-8">
                  {product_description}
               </div>
               <div class="flex space-x-3 mb-4 text-sm font-semibold">
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-indigo-200 text-indigo-700 hover:bg-indigo-300 hover:text-white focus:outline-none" type="button" aria-label="like" title="Editar producto">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </button>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-indigo-200 text-indigo-700 hover:bg-red-500 hover:text-white focus:outline-none" type="button" aria-label="like" title="Eliminar producto" onClick={() => setShowDialog(true)}>
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
               </div>
            </div>
         </div>

         <ReactModal
            isOpen={showDialog}
            contentLabel="Dialog"
            ariaHideApp={false}
            style={{
               content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)'
               }
            }}
         >
            <div class="justify-center">
               <h1 class="text-gray-600 font-semibold text-center"> ¿Desea eliminar este producto?  </h1>
               <h1 class="text-gray-600 font-extrabold text-center mb-10"> Esta acción es permanente  </h1>
               <menu class="flex space-x-14 inset-x-0 bottom-0" >
                  <div class="w-full p-2 text-left text-gray-500">
                     <button onClick={() => setShowDialog(false)} class="cursor-pointer inline-flex items-center focus:outline-none mr-4 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500 hover:text-white ">
                        <svg
                           fill="none"
                           class="w-4 mr-2"
                           viewBox="0 0 52 52"
                           stroke="currentColor"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="5"
                              d="M16 16 36 36 M36 16 16 36"
                           />
                        </svg>
                                    Cancelar
                            </button>
                  </div>

                  <div class="w-full p-2 text-left text-gray-500">
                     <button onClick={deleteProduct} class="cursor-pointer inline-flex items-center focus:outline-none mr-4 px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500 hover:text-white">
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
                                    Eliminar
                            </button>
                  </div>
               </menu>
            </div>

         </ReactModal>

      </>
   );
};

export default CardProduct;