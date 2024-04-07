import React from 'react'
import { createContext, useContext, useState } from 'react'

const MyContext = createContext(false)

export const useContextHook = () => useContext(MyContext)

const AppContext = ({children}) => {
    const [data, setData] = useState(false)

    const toogleData = ()=> {
        setData((prevState) => !prevState)
    }

  return (
      <MyContext.Provider value={{data, toogleData}}>
        {children}
      </MyContext.Provider>
  )
}

export default AppContext
