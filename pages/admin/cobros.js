import React, { useState } from 'react'
import Link from 'next/link'
import {Navbar} from '../components/navbar'

import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('../components/navbar'))

export default function Cobros() {
  return (
    <>
      <NavBar uri="cobros"/>

<div class="container mx-auto">
  <div class="mt-10">
 
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="flex flex-col space-y-5">
              <div class="">
                <label for="product_description" class="block text-sm font-medium text-gray-700">Descripción del producto a vender</label>
                <input type="text" name="product_description" id="product_description" autocomplete="given-name" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100" required/>
              </div>

             

              <div class="">
                <label for="country" class="block text-sm font-medium text-gray-700">Selecciones cripto a usar</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                  <option>Bitcoin</option>
                  <option>Litecoin</option>
                  <option>Dash coin</option>
                </select>
              </div>

              <div class="">
                <label for="country" class="block text-sm font-medium text-gray-700">Selecciones direccion de billetera (Wallet Address)</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="product_amount" class="block text-sm font-medium text-gray-700">Monto en pesos (ARS)</label>
                <input type="number" min="1" step="any" name="product_amount" id="product_amount" autocomplete="street-address" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100" required/>
              </div>

             
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
            <button type="submit" className="items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg className="h-8 w-8 inline-flex pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd" />
                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                  </svg>
              Generar codigo QR
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


    </>



  )
}
