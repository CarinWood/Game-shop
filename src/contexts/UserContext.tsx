import { ReactNode, createContext, useState, useContext } from 'react'

type userContextProviderProps = {
  children: ReactNode
}

type userContextType = {
    user: string | null
    setUser: any
    showLoginForm: boolean
    setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>

}

export const UserContext = createContext({} as userContextType)

export function useUserContext() {
  return useContext(UserContext)
}


export const UserContextProvider = ({children}: userContextProviderProps) => {

const [user, setUser] = useState(null)
const [showLoginForm, setShowLoginForm]= useState<boolean>(true);

  return (
    <UserContext.Provider value={{user, setUser, setShowLoginForm, showLoginForm}}>
        {children}
    </UserContext.Provider>
  )
}
