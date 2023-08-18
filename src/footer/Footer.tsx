import './footer.css'
import {FC} from 'react'

interface Props {
    color: 'grey' | 'white'
}

export const Footer:FC<Props> = ({color}) => {


  return (
    <footer className={color}>
        Created and build by <span><a href="https://carinwood-eng-cv.netlify.app/" target="_blank"> Carin Wood</a></span>
    </footer>
  )
}
