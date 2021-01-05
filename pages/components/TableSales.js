import React, { useState } from 'react'
import Router from 'next/router'


const cryptoIcon = (crypto) => {
   if (crypto === 'Bitcoin')
      return <img className="w-5" src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"></img>
   else if (crypto === 'Litecoin')
      return <img className="w-5" src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg"></img>
   else if (crypto === 'Ethereum')
      return <img className="w-5" src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"></img>
   else if (crypto === 'Dash coin')
      return <img className="w-5" src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/dash.svg"></img>
}

const TableSales = (props) => {
   const [message, setMessage] = useState('');
   const contentType = 'application/json'

   const { _id,
      product_description,
      crypto_coin,
      crypto_address,
      product_price,
      qr_url,
      transaction_status } = props.cobro

   const confirmSale = async () => {
      try {
         const res = await fetch('/api/cobros', {
            method: 'PATCH',
            headers: {
               Accept: contentType,
               'Content-Type': contentType,
            },
            body: JSON.stringify(_id),
         })
         if (!res.ok) {
            throw new Error(res.status)
         }
      } catch (error) {
         setMessage('Fallo la actualizacion de la venta')
      }
      Router.reload('admin/dashboard')
   }

   const deleteSale = async () => {
      try {
         const res = await fetch('/api/cobros', {
            method: 'DELETE',
            headers: {
               Accept: contentType,
               'Content-Type': contentType,
            },
            body: JSON.stringify(_id),
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
      <tr className="">
         <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                  <svg className="w-6 h-6 stroke-current text-indigo-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </div>
               <div className="ml-4">
                  <div className="text-md font-medium text-gray-900">
                     {product_description}
                  </div>
                  <div className="text-sm text-indigo-800">
                     <a href={qr_url} target="_blank">Abrir QR</a>
                  </div>
               </div>
            </div>
         </td>
         <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-md text-gray-900 font-medium pb-2">${product_price}</div>
            <div className="text-xs text-gray-500 inline-flex items-center">{cryptoIcon(crypto_coin)}
               <span className="pl-1">
                  {crypto_address}
               </span>
            </div>
         </td>
         <td className="px-6 py-4 whitespace-nowrap">
            {
               transaction_status ?

                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                     <svg className="w-5 h-5 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                     </svg>
                  Confirmada
               </span>
                  :
                  <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                     <svg className="w-5 h-5 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                     </svg>
                  Sin confirmación
               </span>
            }
         </td>
         <td className="px-8 py-4 whitespace-nowrap">
            {
               transaction_status ?
                  <>
                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <svg className="w-5 h-5 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                  Venta/Transacción confirmada
               </span>
                  </>

                  :
                  <>
                     <button className="mr-2" title="Confirmar recepción del pago" onClick={() => confirmSale()}>
                        <svg className="w-6 h-6 hover:text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                     </button>
                     <button className="ml-2" title="No confirmar recepción del pago" onClick={() => deleteSale()}>
                        <svg className="w-6 h-6 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                        </svg>
                     </button>
                  </>
            }
         </td>
      </tr>
   )
}

export default TableSales