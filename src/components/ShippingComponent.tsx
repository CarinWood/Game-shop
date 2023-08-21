import { IoMdArrowDropdown } from "react-icons/io";
import { FC, useState } from 'react'



interface Props {
    setOpenPayment: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
  
}



export const ShippingComponent: FC<Props> = ({setOpenPayment, setSelectedOption}) => {

   

    const setShippingExpress = () => {
        setSelectedOption('express')
    }
 
    const setShippingRegular = () => {
        setSelectedOption('regular')
    }

    const togglePayment = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setOpenPayment(true);
       
    }


  return (
    <>
        <form>  
    <p className='checkout-headline payment-method'>Shipping</p>


    <div className='shipping-div shipping-first'>
       
        <div>
            <input 
                type="radio" 
                id="ship1" 
                name="shipping" 
                value="free" 
                defaultChecked
                onChange={setShippingRegular}
            />
            <label htmlFor='ship1'>Regular shipping (2-5 days)</label>
        </div>
        <p className='price-offer'>Free</p>
    </div>

    <div className='shipping-div shipping-second'>
        <div>
            <input 
                type="radio" 
                id="ship2" 
                name="shipping" 
                value="express"
                onChange={setShippingExpress}
            />
            <label htmlFor='ship2'>Express Shipping (1 day)</label>
        </div>      
        <p className='price-offer'>+ $15</p>
    </div>

    <div className='continue-btn' onClick={togglePayment}>Continue<IoMdArrowDropdown/></div>
    </form>
    </>
  )
}