import React from 'react'
import '../styles/member.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export const Member = () => {
    const [user, setUser] = useContext(UserContext)

  return (
    <div className='member-container'>
        <p>Welcome {user}!</p>

    </div>
  )
}
