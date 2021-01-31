import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className="">
        <div className="bg-gradient-to-t from-indigo-100 via-indigo-200 to-indigo-300 overflow-hidden ">
          <div className="flex justify-center">
            <div className=" z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center">
                  <div className="my-2">
                    <h1 className="block xl:inline text-white font-semibold text-3xl md:text-5xl">Registre y cobre con el </h1>
                  </div>
                  <div>
                    <h2 className="block text-indigo-600 xl:inline font-semibold text-3xl md:text-4xl uppercase underline ">dinero del futuro</h2>
                  </div>

                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Registre ventas y cobre con criptomonedas.
                    Lleve de forma cómoda todas sus ventas en criptomonedas mediante códigos QR con <span className="font-bold text-gray-800">PAYAR </span>
                    ¡Es muy simple!
                  </p>
                  <div className="mt-10 sm:mt-8 sm:flex sm:justify-center md:space-x-5">
                    <div className="rounded-md shadow mt-4">
                      <Link href="/admin/login" >
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:outline-none">
                          Ingresar
                        </button>
                      </Link>
                    </div>
                    <div className="rounded-md shadow mt-4">
                      <Link href="/register" >
                        <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-300 md:py-4 md:text-lg md:px-10 focus:outline-none">
                          Crear cuenta
                     </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center my-24">
          <h1 className="text-4xl text-indigo-800">¡Empezar es muy facil!</h1>
          <div className="flex flex-wrap flex-col md:flex-row justify-center md:space-x-10 mt-24">
            <div className="flex flex-col items-center ">
              <h1 className="text-indigo-600 font-bold text-5xl md:mx-12 mb-3 my-2">1.</h1>
              <span className="text-2xl">Crearse una cuenta.</span>
              <span className="font-semibold text-lg">¡Es gratis!</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-indigo-600 font-bold text-5xl md:mx-12 mb-3 my-5">2.</h1>
              <span className="text-2xl">Cargue la dirección de su billetera</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-indigo-600 font-bold text-5xl md:mx-12 mb-3 my-5">3.</h1>
              <span className="text-2xl">Comience a vender</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
