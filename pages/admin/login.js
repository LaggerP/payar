import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

import dynamic from 'next/dynamic'


export default function Login() {
   return (
      <>

         <div class="flex flex-row bg-gray-50 ">
         <div className="hidden md:block md:w-3/5 h-screen bg-gradient-to-t from-indigo-500 via-indigo-600 to-indigo-700 ">
            <div className="flex justify-center flex-col ">
            <ul>
               <li>Reciba pagos mediante criptomonedas</li>
               <li>asdfasdf</li>
            </ul>
            </div>
            
         </div>
            <div class="flex flex-col justify-center w-full h-screen md:w-2/5 px-10 md:px-24">
               <div>
                  <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                  <h2 class="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">
                     Ingresar a mi cuenta
                  </h2>
                  <p class="mt-2 text-xs text-center text-gray-600">
                     ¿No posee una cuenta?&nbsp;
                     <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Crear cuenta
                     </a>
                  </p>
               </div>
               <form class="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true" />
                  <div class="rounded-md shadow-sm -space-y-px">
                     <div>
                        <label for="email-address" class="sr-only">Email</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                     </div>
                     <div>
                        <label for="password" class="sr-only">Contraseña</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
                     </div>
                  </div>



                  <div>
                     <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Ingresar
                     </button>
                  </div>
                  <div class="flex items-center justify-center">
                     <div class="text-sm text-center">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                           ¿Olvidó su contraseña?
                        </a>
                     </div>
                  </div>
               </form>
            </div>
         </div>


      </>



   )
}
