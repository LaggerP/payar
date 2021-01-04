import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const DashboardLayout = dynamic(() => import('../components/admin/Dashboard'))
import myGet from '../../api/myGet'

const Dashboard = (props) => {
  const [cobros, setCobros] = useState(props.data)
  const [loading, setLoading] = useState(false)

  if (!loading) {
    return (
      <>
        <NavBar uri="dashboard" />
        <DashboardLayout cobros={cobros} />
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

Dashboard.getInitialProps = async props => {
  return await myGet(`http://localhost:3000/api/cobros/`, props);
};

export default Dashboard;
