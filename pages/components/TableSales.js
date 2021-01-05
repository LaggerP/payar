import React, {useState} from 'react'
import Router from 'next/router'

const TableSales = (props) => {
   const [message, setMessage] = useState('');

   const { _id,
      product_description,
      crypto_coin,
      crypto_address,
      product_price,
      qr_url,
      status } = props.cobro

      const confirmSale = async (idx) => {
         try {
            const res = await fetch('/api/cobros', {
               method: 'UPDATE',
               headers: {
                  Accept: contentType,
                  'Content-Type': contentType,
               },
               body: JSON.stringify(idx),
            })
            if (!res.ok) {
               throw new Error(res.status)
            }
         } catch (error) {
            setMessage('Fallo la actualizacion de la venta')
         }
         Router.reload('admin/dashboard')
      } 

   return (
      <tr >
         <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
               <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                  <svg class="w-6 h-6 stroke-current text-indigo-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </div>
               <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                     {product_description}
                  </div>
                  <div class="text-sm text-indigo-800">
                     <a href={qr_url} target="_blank">Abrir QR</a>
                  </div>
               </div>
            </div>
         </td>
         <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{product_price}</div>
            <div class="text-xs text-gray-500">({crypto_coin}) {crypto_address}</div>
         </td>
         <td class="px-6 py-4 whitespace-nowrap">
            {
               status ? <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Confirmada
         </span>
                  :
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                     Sin confirmada
         </span>
            }
         </td>
         <td class="px-8 py-4 whitespace-nowrap">
            <button className="mr-2" title="Confirmar recepción del pago" onClick={() => confirmSale(_id)}>
               <svg class="w-6 h-6 hover:text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
               </svg>
            </button>
            <button className="ml-2" title="No confirmar recepción del pago" onClick={() => noConfirmSale(_id)}>
            <svg class="w-6 h-6 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
            </button>
         </td>
      </tr>
   )
}

export default TableSales