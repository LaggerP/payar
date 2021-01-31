import { useState } from 'react'
import Head from 'next/head'
import myGet from '../../api/myGet'
import Cookies from 'js-cookie'

import Navbar from '../components/Navbar'
import CardProduct from '../components/CardProduct'

import ReactModal from 'react-modal'

const Productos = (props) => {
  const contentType = 'application/json'

  const initialProductState = {
    productName: '',
    productDescription: '',
    productPrice: 0,
    imgUrl: '',
    userId: Cookies.get('_id'),
    status: true
  }

  const { data } = props
  const [showModal, setShowModal] = useState(false)
  const [productData, setProductData] = useState(initialProductState)
  const [message, setMessage] = useState('')
  const [products, setProducts] = useState(props.data)


  const openModal = () => !showModal ? setShowModal(true) : setShowModal(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData({
      ...productData,
      [name]: value
    })
  }

  const newProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify(productData)
      })
      if (!res.ok) {
        setLoading(false)
        throw new Error(res.status)
      } else {
        setShowModal(false)
      }
    } catch (error) {
      setMessage('Fallo al crear un nuevo producto')
    }
  }

  return (
      <>
         <Head>
            <title>Productos - Payar</title>
         </Head>
         <Navbar uri="productos" />

         <div className="m-10 grid gap-x-2 md:gap-y-5 md:grid-cols-2 xl:gap-x-8 xl:gap-y-5 xl:grid-cols-4">
            <div className="flex p-6 cursor-pointer">
               <div className="flex justify-center items-center w-full bg-indigo-50 hover:bg-indigo-100 rounded-lg" onClick={openModal} style={{ height: '205px' }}>
                  <svg className="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>

               <ReactModal
                  isOpen={showModal}
                  contentLabel="Minimal Modal Example"
                  ariaHideApp={false}
               >
                  <form className="py-40 bg-gray-100 bg-opacity-50 h-screen" onSubmit={newProduct} method="POST">
                     <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-600 rounded-t">
                           <div className="max-w-sm mx-auto md:w-full md:mx-0">
                              <div className="inline-flex items-center space-x-4">
                                 <svg className="w-6 h-6 stroke-current text-indigo-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

                                 <h1 className="text-gray-600">Formulario de creación de un nuevo producto</h1>
                              </div>
                           </div>
                        </div>
                        <div className="bg-white space-y-6">
                           <div className="space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                              <div className="flex flex-col">
                                 <div className="w-full max-w-sm mx-auto">
                                    <label className="text-sm text-gray-400">Nombre</label>
                                    <div className="w-full inline-flex border">
                                       <input
                                          name="productName"
                                          type="text"
                                          required
                                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="Café con Leche"
                                          onChange={handleChange}
                                       />
                                    </div>
                                 </div>
                                 <div className="md:w-2/3 max-w-sm mx-auto">
                                    <label className="text-sm text-gray-400">Descripción</label>
                                    <div className="w-full inline-flex border">
                                       <input
                                          name="productDescription"
                                          type="text"
                                          required
                                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="Café con Leche hecho en máquina expreso"
                                          onChange={handleChange}
                                       />
                                    </div>
                                 </div>
                                 <div className="md:w-2/3 max-w-sm mx-auto">
                                    <label className="text-sm text-gray-400">Precio</label>
                                    <div className="w-full inline-flex border">
                                       <input
                                          name="productPrice"
                                          type="number"
                                          required
                                          min={0}
                                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          placeholder="$90"
                                          onChange={handleChange}
                                       />
                                    </div>
                                 </div>
                                 <div className="md:w-2/3 max-w-sm mx-auto">
                                    <label className="text-sm text-gray-400">Imagen</label>
                                    <div className="w-full inline-flex border">
                                       <input
                                          name='imgUrl'
                                          type='file'
                                          id='single'
                                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                                          onChange={handleChange} />
                                    </div>
                                 </div>
                              </div>

                           </div>

                           <div className="flex justify-end pb-4 pr-2">

                              <div className="p-2 text-gray-500">
                                 <button type="submit" className="cursor-pointer inline-flex items-center focus:outline-none px-3 py-2 rounded-md text-sm font-medium bg-indigo-400  hover:bg-green-500 text-white">
                                    <svg
                                       fill="none"
                                       className="w-4 mr-2"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                       />
                                    </svg>
                                    Crear producto
                                 </button>
                              </div>
                              <div className="p-2  text-gray-500">
                                 <button onClick={openModal} className="cursor-pointer inline-flex items-center focus:outline-none  px-3 py-2 rounded-md text-sm font-medium bg-red-400 hover:bg-red-500 text-white">
                                    <svg
                                       fill="none"
                                       className="w-4 mr-2"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                       />
                                    </svg>
                                    Cancelar creación
                                 </button>
                              </div>
                           </div>

                        </div>
                     </div>
                  </form>
               </ReactModal>
            </div>

            {
               (data !== null || data.length >= 0)

                 ? products.map((p, idx) => {
                   return <CardProduct data={p} key={idx}/>
                 })
                 : null}

         </div>

      </>
  )
}

Productos.getInitialProps = async props => {
  const url = process.env.NODE_ENV === 'production' ? 'https://payar.vercel.app/api/productos/' : 'http://localhost:3000/api/productos/'

  return await myGet(url, props)
}

export default Productos
