import React,{useState,useContext,useEffect,createContext} from 'react'

export const AuthContext = createContext() 



const AuthProvider = ({children}) => {
    const [data, setData] = useState(null)
  return (
    <AuthContext.Provider value={{data}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
