import React, { useState } from 'react'
import Cookie from 'js-cookie'
import Router from 'next/router';

export default function Cobros(props) {
  const { direcciones } = props

  let initialState = {
    crypto_coin: '',
    crypto_address: '',
    crypto_reference: '',
    email_reference: Cookie.get('email'),
    status: true,
  }

  const [addressData, setPayData] = useState(initialState);
  const [message, setMessage] = useState('');
  const contentType = 'application/json'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayData({
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

  const deleteAddress = async (objId) => {
    try {
      const res = await fetch('/api/direcciones', {
        method: 'DELETE',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(objId),
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
    <>
      <div class="container mx-auto">
        <div class="mt-10">
          <h3 className="text-xl mb-4 ml-2 md:ml-1">Direcciones actuales:</h3>
          <div className="flex flex-wrap ">
            {

              (direcciones.length !== 0) ?
                direcciones.map((direccion, idx) => {
                  const { _id, crypto_coin, crypto_address, crypto_reference, status } = direccion
                  return (
                    <div class="w-full lg:w-1/5 m-2" key={idx}>
                      <div class="widget w-full p-4 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800">
                        <div class="flex flex-row items-center justify-between">
                          <div class="flex flex-col">
                            <div class="text-sm uppercase font-medium text-black">
                              {crypto_coin} - <span className="text-xs text-gray-500">{crypto_reference}</span>
                            </div>
                            <div class="text-sm font-medium text-black">
                              <span className="text-xs text-gray-500">Dirección: {crypto_address}</span>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">

                            <button title="Eliminar dirección" onClick={()=> deleteAddress(_id)}>
                              <svg class="w-6 h-6 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                              </svg>
                            </button>

                          </div>

                        </div>
                      </div>
                    </div>

                  )
                })
                :
                <h1>Ninguna</h1>



            }
          </div>



        </div>
        <div class="mt-10">
          <h3 className="text-xl mb-4 ml-2 md:ml-1">Agregar nueva dirección:</h3>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={newAddress} method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="flex flex-col space-y-5">
                    <div class="">
                      <label htmlFor="crypto_reference" class="block text-sm font-medium text-gray-700">Descripción del dirección a crear</label>
                      <input type="text" name="crypto_reference" id="crypto_reference" autoComplete="none" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese aquí una referencia a la direccion de la billetera que va a guardar" required onChange={handleChange} />
                    </div>
                    <div class="">
                      <label htmlFor="crypto_coin" class="block text-sm font-medium text-gray-700">Seleccione a que criptomoneda pertenece su dirección</label>
                      <select id="crypto_coin" name="crypto_coin" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required onChange={handleChange}>
                        <option selected="selected">Seleccione con la criptomoneda</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Litecoin">Litecoin</option>
                        <option value="Dash coin">Dash coin</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label htmlFor="crypto_address" class="block text-sm font-medium text-gray-700">Ingrese la dirección</label>
                      <input type="text" name="crypto_address" id="crypto_address" autoComplete="none" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese el monto en pesos" required onChange={handleChange} />
                      <span className="text-xs font-semibold">* Tenga en cuenta que este formulario no verifica si su dirección es válida. Confiamos en que ingrese la dirección correcta.</span>
                    </div>


                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
                  <button type="submit" className="items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className="h-8 w-8 inline-flex pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
              Nueva dirección
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