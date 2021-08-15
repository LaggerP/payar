import React, { createContext, useState } from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  return (
    <AppContext.Provider value={
      { userData, setUserData }
    }>
      {children}
    </AppContext.Provider>)
}
