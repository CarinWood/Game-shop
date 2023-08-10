import { createContext, useState} from 'react'

export const ProfilePicContext = createContext()

export const ProfilePicContextProvider = (props) => {

  const [profilePic, setProfilePic] = useState('luigi')

  return (
    <ProfilePicContext.Provider value={[profilePic, setProfilePic]}>
        {props.children}
    </ProfilePicContext.Provider>
  )
}
