import { useEffect, useState, } from 'react'
import ReactConfetti from 'react-confetti'



export const ConfettiComponent = () => {
  const [windowDimension, setDimension] = useState({widht: window.innerWidth, height: window.innerHeight})
  const detectSize = () => {
    setDimension({widht: window.innerWidth, height: window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  },[windowDimension])

  return (
    <div className='confetti'>
        <ReactConfetti
          width={windowDimension.widht}
          height={windowDimension.height}
          tweenDuration={1000}

        />
    </div>
  )
}
