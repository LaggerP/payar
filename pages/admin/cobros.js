import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
import myGet from '../../api/myGet'
import Cookies from 'js-cookie'


const Cobros = (props) => {

const { data } = props


  let initialState = {
    product_description: '',
    crypto_coin: '',
    crypto_address: '',
    product_price: 0,
    email_reference: Cookies.get('email')
   }
   
   const [payData, setPayData] = useState(initialState);
   const [message, setMessage] = useState('');
   const contentType = 'application/json'
   
   const handleChange = async (e) => {
    const { name, value } = e.target;
    setPayData({
      ...payData,
      [name]: value
    });
   }
   
   const postPay = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/cobros', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(payData),
      })
      if (!res.ok) {
        throw new Error(res.status)
      }
    } catch (error) {
      setMessage('Fallo al crear un nuevo cobro')
    }
   }


  return (
    <>
      <NavBar uri="cobros" />
      <div class="container mx-auto">
      <div class="mt-10">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={postPay} method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="flex flex-col space-y-5">
                  <div class="">
                    <label htmlFor="product_description" class="block text-sm font-medium text-gray-700">Descripción del producto a vender</label>
                    <input type="text" name="product_description" id="product_description" autoComplete="none" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese una descripción del producto que va a cobrar" required onChange={handleChange}/>
                  </div>
                  <div class="">
                    <label htmlFor="crypto_coin" class="block text-sm font-medium text-gray-700">Selecciones cripto a usar</label>
                    <select id="crypto_coin" name="crypto_coin" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required onChange={handleChange}>
                    <option selected="selected" value="default">Seleccione con la criptomoneda que va a cobrar</option>
                      <option value="Bitcoin">Bitcoin</option>
                      <option value="Litecoin">Litecoin</option>
                      <option value="Dash coin">Dash coin</option>
                    </select>
                  </div>

                  <div class="">
                    <label htmlFor="crypto_address" class="block text-sm font-medium text-gray-700">Selecciones direccion de billetera (Wallet Address)</label>
                    <select id="crypto_address" name="crypto_address" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  required onChange={handleChange}>
                      <option selected="selected">Seleccione dirección asociada a la criptomoneda seleccionada</option>
                      {
                        
                        data.map(address =>
                          <option>{address.crypto_address} (Ref: {address.crypto_reference})</option>
                        )
                        
                      }
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label htmlFor="product_price" class="block text-sm font-medium text-gray-700">Monto en pesos (ARS)</label>
                    <input type="number" min="1" step="any" name="product_price" id="product_price" autoComplete="none" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md" placeholder="Ingrese el monto en pesos" required onChange={handleChange}/>
                  </div>


                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
                <button type="submit" className="items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg className="h-8 w-8 inline-flex pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd" />
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

Cobros.getInitialProps = async props => {
  return await myGet(`http://localhost:3000/api/direcciones/`, props);
};

export default Cobros;


