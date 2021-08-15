import Head from 'next/head'

import Navbar from '../components/Navbar'
import CardCryptoAddress from '../components/CardCryptoAddress'
import FormNewAddress from '../components/FormNewAddress'

const Direcciones = (props) => {
  return (
    <>
      <Head>
        <title>Direcciones - Payar</title>
      </Head>
      <Navbar uri="direcciones"/>
      <div className="container mx-auto">
        <div className="mt-10">
          <h3 className="text-xl mb-4 ml-2 md:ml-1">Direcciones actuales:</h3>
          <div className="flex flex-wrap ">
            {
              <h1>Ninguna</h1>
            }
          </div>
          <FormNewAddress/>
        </div>
      </div>
    </>
  )
}
export default Direcciones
