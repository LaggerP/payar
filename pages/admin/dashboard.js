import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/navbar'))

export default function Dashboard() {

  let initialState = {
    coin: 'bitcoin',
    address: '1J19TLLqu8DH2cv3ze7g1xZNwyyXWyGLKc',
    amount: 0.0001,
  }

  const [payData, setPayData] = useState(initialState);
  const [qr, setQr] = useState();

  const qrUri = `https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=${payData.coin}:${payData.address}?amount=${payData.amount}%26`;

  const generatePay = async () => {
    console.log(qrUri)
    const data = await fetch(qrUri)
    setQr(data.url)
  }


  return (
    <>
      <NavBar uri="dashboard" />
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
                        Producto comprado
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Monto cobrado ($)
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
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Jane Cooper
                            </div>
                            <div class="text-sm text-gray-500">
                              jane.cooper@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                        <div class="text-sm text-gray-500">Optimization</div>
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>



  )
}
