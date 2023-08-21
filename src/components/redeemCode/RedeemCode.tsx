import {useState, useEffect, FC} from 'react'
import { BsCheckAll } from "react-icons/bs";
import './redeemCode.css'
import { useShoppingCart } from '../../contexts/ShoppingCartContext';


interface Props  {
    setHasDiscount: React.Dispatch<React.SetStateAction<boolean>>
    setDiscount: React.Dispatch<React.SetStateAction<number>>
}


export const RedeemCode:FC<Props> = ({setHasDiscount, setDiscount}) => {

    const [rightCode, setRightCode] = useState<string>('Mario10')
    const [typedCode, setTypedCode] = useState<string>('')
    const [wrongCode, setWrongCode] = useState<boolean>(false);
    const [hasTypedRight, setHasTypedRight] = useState<boolean>(false);

    const {total} = useShoppingCart()

    useEffect(() => {
        resetTypedCode()
    }, [wrongCode])

    useEffect(() => {
        calculateDiscount()
    },[rightCode] )

    const handleTypedCode = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (typedCode === '') setWrongCode(false)
        setTypedCode(e.target.value)
    }

    const checkCode = () => {
        if (typedCode === rightCode) {
            setHasTypedRight(true)
            setHasDiscount(true)
        } else {
            setWrongCode(true)
            
        }
    }

    const resetTypedCode = () => {
        setTypedCode('')
    }

    
     const calculateDiscount = () => {
         let calculatedDiscount:number = total * 0.1;
         let disc = parseFloat(calculatedDiscount.toFixed(2))
         setDiscount(disc)
     }


  return (
    <>
    {hasTypedRight ? 
        <div className='discount-text'>
        <p>10 % discount code used</p> 
        <BsCheckAll className='checkmark'/>
        </div>
    :<div className='code'>
        <p className='redeem-code-text'>Redeem Code:</p>
        {wrongCode && <p className='wrong-code'>You entered the wrong code</p>}
        <input className='code-input' 
        onChange={handleTypedCode}
        placeholder="Redeem code"
        />
        <div className='ok-button' onClick={checkCode}>OK</div>
    </div>
  }
  </>
  )
}
