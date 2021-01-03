import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/navbar'))
const DashboardLoyaut = dynamic(()=> import('../components/admin/dashboard'))
import withPrivateRoute from '../components/withPrivateRoute';

const Dashboard = () => {

  const [cobros, setCobros] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const res = await fetch('../api/cobros')
    setCobros(await res.json())
    setLoading(false)
  }, [])

  if (!loading) {
    return (
      <>
        <NavBar uri="dashboard" />
        <DashboardLoyaut cobros={cobros.data}/>
      </>
    )
  } else {
    return <h1>Cargando</h1>
  }

}

Dashboard.getInitialProps = async props => {
  return {};
};

export default withPrivateRoute(Dashboard);
