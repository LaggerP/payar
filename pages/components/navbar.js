import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(props) {

  const [isOpen, setIsOpen] = useState(false)

  console.log(props.uri)



  return (
    <>
      <nav className="bg-indigo-500">
        <div className="flex items-center p-4 pl-0">
          <div className="flex-shrink-0">
            <img className="ml-5 h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          </div>
          <div className="w-screen hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

              <Link href="/admin/dashboard" passHref>
                <button className={props.uri == 'dashboard' ? 'bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none'}>
                  <svg className="h-8 w-8 inline-flex pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd" />
                  </svg>Dashboard
                </button>
              </Link>

              <Link href="/admin/direcciones" passHref>

                <button className={props.uri == 'direcciones' ? 'bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none'}>
                  <svg className="h-8 w-8 inline-flex pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>Mis direcciones
                </button>
              </Link>

              <Link href="/admin/cobros" passHref>
                <button className={props.uri == 'cobros' ? 'bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none'}>
                  <svg className="h-8 w-8 inline-flex pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clip-rule="evenodd" />
                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                  </svg>
                  Nuevo cobro
                </button>
              </Link>

              <Link href="/admin/dashboard" passHref>
                <button className={props.uri == 'componente1' ? 'bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none'}>
                  Componente
                </button>
              </Link>

              <Link href="/admin/dashboard" passHref>
                <button className={props.uri == 'componente2' ? 'bg-gray-100 text-black px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium focus:outline-none'}>
                  Componente
                </button>
              </Link>
            </div>

          </div>
          <div className="w-full flex justify-end  visible md:invisible">
            <div>
              <button class="inline-flex items-center justify-center p-2 rounded-md text-white bg-indigo-600 focus:outline-none" aria-expanded="false" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/*responsive menu*/}
        <div className={isOpen ? 'block' : 'hidden'}>
          <div className="flex flex-col">

            <Link href="/admin/dashboard" passHref>
              <button className={props.uri == 'dashboard' ? 'bg-gray-100 text-black px-3 py-2  text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2  text-sm font-medium focus:outline-none'}>
                Dashboard
              </button>
            </Link>

            <Link href="/admin/direcciones" passHref>
              <button className={props.uri == 'direcciones' ? 'bg-gray-100 text-black px-3 py-2  text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2  text-sm font-medium focus:outline-none'}>
                Mis direcciones
              </button>
            </Link>

            <Link href="/admin/cobros" passHref>
              <button className={props.uri == 'cobros' ? 'bg-gray-100 text-black px-3 py-2  text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2  text-sm font-medium focus:outline-none'}>
              Nuevo cobros
              </button>
            </Link>

            <Link href="/admin/dashboard" passHref>
              <button className={props.uri == 'componente1' ? 'bg-gray-100 text-black px-3 py-2  text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2  text-sm font-medium focus:outline-none'}>
                Componente
              </button>
            </Link>

            <Link href="/admin/dashboard" passHref>
              <button className={props.uri == 'componente2' ? 'bg-gray-100 text-black px-3 py-2  text-sm font-medium' : 'text-gray-100 hover:bg-gray-100 hover:text-black px-3 py-2  text-sm font-medium focus:outline-none'}>
                Componente
              </button>
            </Link>
          </div>
        </div>

      </nav>
    </>



  )
}
