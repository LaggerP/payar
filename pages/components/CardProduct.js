import React from 'react';

const CardProduct = () => {
   return (
      <>
         <div class="flex p-6 ">
            <div class="flex-none w-44 relative">
               <img src="https://images.unsplash.com/photo-1553531152-e0757d8c0e92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="absolute inset-0 w-full h-full object-cover rounded-l-lg" />
            </div>
            <div class="flex-auto pl-6 bg-indigo-50 rounded-r-lg">
               <div class="flex flex-wrap items-baseline">
                  <h1 class="w-full flex-none font-semibold mb-2.5 mt-2.5">
                     Nombre producto
                  </h1>
                  <div class="text-4xl leading-7 font-bold text-indigo-600">
                     $precio
                  </div>
               </div>
               <div class="flex items-baseline text-xs my-8">
                  Descripcion del producto
               </div>
               <div class="flex space-x-3 mb-4 text-sm font-semibold">
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-indigo-200 text-indigo-700 hover:bg-indigo-300 hover:text-white" type="button" aria-label="like" title="Editar producto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  </button>
                  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-indigo-200 text-indigo-700 hover:bg-red-500 hover:text-white" type="button" aria-label="like" title="Eliminar producto">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
               </div>
            </div>
         </div>

      </>
   );
};

export default CardProduct;