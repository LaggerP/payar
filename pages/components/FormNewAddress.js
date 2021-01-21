import React, { useState } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router'

const FormNewAddress = (props) => {

   let initialState = {
      crypto_coin: '',
      crypto_address: '',
      crypto_reference: '',
      email_reference: Cookie.get('email'),
      status: true,
   }

   const [addressData, setAddressData] = useState(initialState);

   const [message, setMessage] = useState('');
   const contentType = 'application/json'

   const handleChange = (e) => {
      const { name, value } = e.target;
      setAddressData({
         ...addressData,
         [name]: value
      });
   }

   const newAddress = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch('/api/direcciones', {
            method: 'POST',
            headers: {
               Accept: contentType,
               'Content-Type': contentType,
            },
            body: JSON.stringify(addressData),
         })
         if (!res.ok) {
            throw new Error(res.status)
         }
      } catch (error) {
         setMessage('Fallo al crear un nuevo cobro')
      }
      Router.reload('admin/direcciones')
   }

   return (
      <div className="mt-10">
         <h3 className="text-xl mb-4 ml-2 md:ml-1">Agregar nueva dirección:</h3>
         <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={newAddress} method="POST">
               <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                     <div className="flex flex-col space-y-5">
                        <div className="">
                           <label htmlFor="crypto_reference" className="block text-sm font-medium text-gray-700">Descripción del dirección a crear</label>
                           <input type="text" name="crypto_reference" id="crypto_reference" autoComplete="none" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese aquí una referencia a la direccion de la billetera que va a guardar" required onChange={handleChange} />
                        </div>
                        <div className="">
                           <label htmlFor="crypto_coin" className="block text-sm font-medium text-gray-700">Seleccione a que criptomoneda pertenece su dirección</label>
                           <select id="crypto_coin" name="crypto_coin" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required onChange={handleChange}>
                              <option selected="selected">Seleccione con la criptomoneda</option>
                              <option value="Bitcoin">Bitcoin</option>
                              <option value="Litecoin">Litecoin</option>
                              <option value="Dash coin">Dash coin</option>
                           </select>
                        </div>

                        <div className="col-span-6">
                           <label htmlFor="crypto_address" className="block text-sm font-medium text-gray-700">Ingrese la dirección</label>
                           <input type="text" name="crypto_address" id="crypto_address" autoComplete="none" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese el monto en pesos" required onChange={handleChange} />
                           <span className="text-xs font-semibold">* Tenga en cuenta que este formulario no verifica si su dirección es válida. Confiamos en que ingrese la dirección correcta.</span>
                        </div>


                     </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
                     <button type="submit" className="items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="h-8 w-8 inline-flex pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
              Nueva dirección
            </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default FormNewAddress