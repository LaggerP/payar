import { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import Navbar from '../components/Navbar'
import TableSales from '../components/TableSales'
import { AppContext } from '../../contexts/AppContext'
import Cookies from 'js-cookie'

const Dashboard = (props) => {
  const {
    userData,
    setUserData
  } = useContext(AppContext)
  const [cobros, setCobros] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    let cobros = await fetch(`/api/cobros/${Cookies.get('_id')}`)
    if (cobros.status === 200) {
      cobros = await cobros.json()
      setCobros(cobros.data)
      setLoading(true)
    } else if (cobros.status === 401) {
      Router.push('/admin/login')
    }
  }, [userData])

  if (loading) {
    return (
      <>
        <Head>
          <title>Dashboard - Payar</title>
        </Head>
        <Navbar uri="dashboard"/>
        <div className="container mx-auto my-10 md:my-20">
          <div className="flex justify-center my-10">
            <Link href="/admin/cobros">
              <button
                className="text-white font-semibold bg-green-500 hover:bg-green-600 focus:outline-none rounded-md p-2 w-1/2 md:w-1/4 ">
                <svg className="h-8 w-8 inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                Nueva venta
              </button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl mb-4 md:ml-1">Últimas transacciones:</h3>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-indigo-100 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-indigo-500">
                    <tr>
                      <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Producto
                        cobrado
                      </th>
                      <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Monto
                        cobrado (AR$)
                      </th>
                      <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Estado
                        de la transferencia
                      </th>
                      <th scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Confirmación
                        de la venta
                      </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {
                      (cobros.length !== 0)
                        ? cobros.map((cobro, idx) => {
                          return <TableSales key={idx} cobro={cobro}/>
                        })
                        : <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                                <svg className="w-6 h-6 stroke-current text-indigo-500" fill="none" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                              </div>
                              <div className="ml-4">
                                <div className="text-md font-medium text-gray-900">
                                  No hay trasnsacciones registradas
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900"><span
                              className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-200 text-black">
                                                Sin información
                                          </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                                             <span
                                               className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-200 text-black">
                                                Sin información
                                          </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                                             <span
                                               className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-200 text-black">
                                                Sin información
                                          </span>
                          </td>
                        </tr>
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="w-screen h-screen justify-center flex items-center">
        <h1 className="text-4xl font-extrabold tracking-wide text-black">Cargando información...</h1>
      </div>
    )
  }
}

export default Dashboard
