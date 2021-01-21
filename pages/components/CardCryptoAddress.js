import Router from 'next/router'

const CardCryptoAddress = (props) => {

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
   if(props.data !== undefined) {
      return (
         <div className="w-full lg:w-1/5 m-2">
            <div className="widget w-full p-4 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800">
               <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                     <div className="text-sm uppercase font-medium text-black">
                        {props.data.crypto_coin} - <span className="text-xs text-gray-500">{props.data.crypto_reference}</span>
                     </div>
                     <div className="text-sm font-medium text-black">
                        <span className="text-xs text-gray-500">Dirección: {props.data.crypto_address}</span>
                     </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                     <button className="focus:outline-none" title="Eliminar dirección" onClick={() => deleteAddress(props.data._id)}>
                        <svg className="w-6 h-6 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   } else {
      return null
   }
  
}
export default CardCryptoAddress;