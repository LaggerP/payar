import React from 'react'
import dynamic from 'next/dynamic'
const LayoutLogin = dynamic(() => import('../components/admin/login'))

export default function Login() {
   return (
      <>
         <LayoutLogin/>
      </>
   )
}
