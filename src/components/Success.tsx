import React, {FC} from 'react'
import { Interface } from 'readline'


interface Props {
  handleBtnClick: () => void
}


export const Success:FC<Props> = ({handleBtnClick}) => {


  

  return (
    <div className='success-popup'>
        <p>Success</p>
        <p>You are now a member</p>
        <button onClick={handleBtnClick}>To Login</button>
    </div>
  )
}
