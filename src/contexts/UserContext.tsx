import { ReactNode, createContext, useState, useContext } from 'react'

type userContextProviderProps = {
  children: ReactNode
}

type userContextType = {
    user: string | null
    setUser: any
}

export const UserContext = createContext({} as userContextType)

export function useUserContext() {
  return useContext(UserContext)
}


export const UserContextProvider = ({children}: userContextProviderProps) => {

const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
