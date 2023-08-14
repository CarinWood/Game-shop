import { ReactNode, createContext, useState, useContext} from 'react'


type profilePicProviderProps = {
  children: ReactNode
}

type profilePicType = {
  profilePic: string
  setProfilePic: any
}

export const ProfilePicContext = createContext({} as profilePicType)

export function useProfilePic() {
  return useContext(ProfilePicContext)
}

export const ProfilePicContextProvider = ({children}: profilePicProviderProps) => {

  const [profilePic, setProfilePic] = useState('luigi')

  return (
    <ProfilePicContext.Provider value={{profilePic, setProfilePic}}>
        {children}
    </ProfilePicContext.Provider>
  )
}
