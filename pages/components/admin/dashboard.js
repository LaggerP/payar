import React from 'react';
import Link from 'next/link'


export default function Dashboard(props) {
   const { cobros } = props

   return (
      <>
         <div className="container mx-auto my-10 md:my-20">

            <div className="flex justify-center my-10">

               <Link href="/admin/cobros">
                  <button className=" text-white bg-green-500 hover:bg-green-600 focus:outline-none rounded-md p-2 w-1/2 md:w-1/4">
                     <svg className="h-8 w-8 inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                     </svg>
Nueva venta
</button>
               </Link>

            </div>


            <div class="flex flex-col">
               <h3 className="text-xl mb-4 md:ml-1">Últimas transacciones:</h3>
               <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                     <div class="shadow overflow-hidden border-b border-indigo-100 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                           <thead class="bg-indigo-500">
                              <tr>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Producto cobrado
            </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Monto cobrado (AR$)
            </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Estado de la transferencia
            </th>
                                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Confirmación de la venta
            </th>

                              </tr>
                           </thead>
                           <tbody class="bg-white divide-y divide-gray-200">
                              {
                                 cobros.map(cobro => {
                                    const { _id,
                                       product_description,
                                       crypto_coin,
                                       crypto_address,
                                       product_price,
                                       qr_url,
                                       status } = cobro
                                    return (<tr>
                                       <td class="px-6 py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                             <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                                             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
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
                                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             Active
</span>
                                       </td>
                                       <td class="px-6 py-4 whitespace-nowrap">
                                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                             Active
</span>
                                       </td>
                                    </tr>)
                                 })
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};
