import { Router } from 'next/router'
import ReactModal from 'react-modal'

const DeleteProductModal = (props) => {
  const {
    showDialog,
    setShowDialog,
    idProduct
  } = props

  const contentType = 'application/json'

  const deleteProduct = async () => {
    console.log('hola')
    try {
      const res = await fetch('/api/productos', {
        method: 'DELETE',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify({ idProduct: idProduct })
      })
      console.log(res)
      if (!res.ok) {
        throw new Error(res.status)
      }
      setShowDialog(false)
      Router.reload(window.location.pathname)
    } catch (error) {
    }
  }
  return (
    <>
      <ReactModal
        isOpen={showDialog}
        contentLabel="Dialog"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <div className="justify-center">
          <h1 className="text-gray-600 font-semibold text-center"> ¿Desea eliminar este producto? </h1>
          <h1 className="text-gray-600 font-extrabold text-center mb-10"> Esta acción es permanente </h1>
          <div className="flex justify-center">
            <div className="w-full p-2 text-gray-500">
              <button onClick={() => setShowDialog(false)}
                      className="cursor-pointer inline-flex items-center focus:outline-none  px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500 hover:text-white ">
                <svg
                  fill="none"
                  className="w-4 mr-2"
                  viewBox="0 0 52 52"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M16 16 36 36 M36 16 16 36"
                  />
                </svg>
                Cancelar
              </button>
            </div>

            <div className="w-full p-2 text-gray-500">
              <button onClick={() => deleteProduct}
                      className="cursor-pointer inline-flex items-center focus:outline-none  px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500 hover:text-white">
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
                Eliminar
              </button>
            </div>
          </div>
        </div>

      </ReactModal>
    </>
  )
}

export default DeleteProductModal
