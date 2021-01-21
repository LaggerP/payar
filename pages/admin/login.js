import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Cookie from 'js-cookie'

export default function Login() {

   let initialAccountState = {
      email: '',
      password: ''
   }

   const [accountData, setAccountData] = useState(initialAccountState);
   const [wrongCredentials, setWrongCredentials] = useState(false);
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');

   const contentType = 'application/json'

   const handleChange = (e) => {
      const { name, value } = e.target;
      setAccountData({
         ...accountData,
         [name]: value
      });
      if (name === 'email') {
         Cookie.set("email", value)
      }
   }

   const login = async (e) => {
      setLoading(true)
      e.preventDefault();
      try {
         const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
               Accept: contentType,
               'Content-Type': contentType,
            },
            body: JSON.stringify(accountData),
         })
         if (!res.ok) {
            setWrongCredentials(true)
            setLoading(false)
            document.getElementById('loginForm').reset();
            throw new Error(res.status)
         } else {
            Router.push('/admin/dashboard');
         }
      } catch (error) {
         setMessage('Fallo al crear una nueva cuenta')
      }
   }

   return (
      <>
         <div className="flex flex-row bg-gray-50 ">
            <div className="hidden md:block md:w-3/5 h-screen bg-gradient-to-t from-indigo-500 via-indigo-700 to-indigo-800">
               <div className="flex justify-center items-center h-full text-white text-2xl">
                  <ul className="">
                     <li className="my-5 flex items-center">
                        <svg className="w-10 h-10 p-2 mr-3 bg-white rounded-full stroke-current text-indigo-500" fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                        Reciba pagos mediante criptomonedas.
                     </li>
                     <li className="my-5 flex items-center">
                        <svg className="w-10 h-10 p-2 mr-3 bg-white rounded-full stroke-current text-indigo-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Controle las transacciones de su negocio.</li>
                     <li className="my-5 flex items-center">
                        <svg className="w-10 h-10 p-2 mr-3 bg-white rounded-full stroke-current text-indigo-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                        Genere códigos QR</li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col justify-center w-full h-screen md:w-2/5 px-10 md:px-24">
               <div>
                  <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">
                     Ingresar a mi cuenta
                  </h2>
                  <p className="mt-2 text-xs text-center text-gray-600">
                     ¿No posee una cuenta?&nbsp;
                     <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        <button className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none">
                           Crear una
                     </button>
                     </Link>
                  </p>
               </div>
               <form id="loginForm" className="mt-8 space-y-6" onSubmit={login} method="POST">
                  <input type="hidden" name="remember" value="true" />
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="email-address" className="sr-only">Email</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" onChange={handleChange} />
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" onChange={handleChange} />
                     </div>

                  </div>
                  <div className="text-center text-xs text-red-500 font-medium">
                     {
                        wrongCredentials ? <span>Puede que sus credenciales no sean las correctas.</span> : null
                     }
                  </div>
                  <div>
                     <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {!loading ? 'Ingresar' : 'Cargando...'}

                     </button>

                  </div>
                  <div className="flex items-center justify-center">
                     <div className="text-sm text-center">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
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
