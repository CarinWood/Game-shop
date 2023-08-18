import paypal from '../assets/images/paypal.png'
import swish from '../assets/images/swish.png'
import klarna from '../assets/images/klarna.png'
import { FC } from 'react'

interface Props {
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
}

export const PaymentComponent:FC<Props> = ({setPaymentMethod}) => {

    const setSwish = () => {
        setPaymentMethod('Swish')
    }
    const setPayPal = () => {
        setPaymentMethod('PayPal')
    }
    const setKlarna = () => {
        setPaymentMethod('Klarna')
    }


  return (
    <form>
    <p className='checkout-headline payment-method'>Payment Method</p>
          
    <div className='payment-div radio-first'>
        <div>
            <input 
                type="radio" 
                id="radio1" 
                name="payment" 
                defaultChecked
                value="Klarna"
                onChange={setKlarna}
                />
            <label htmlFor="radio1">Credit card / Invoice</label>
        </div>
            <div className='logo-container klarna'><img src={klarna} alt="klarna logo"/></div>
   
    </div>

    <div className='payment-div radio-second'>
        <div>
            <input 
                type="radio" 
                id="radio2" 
                name="payment"
                value="Swish"
                onChange={setSwish}
            />
            <label htmlFor='radio2'>Swish</label>
        </div>
            <div className='logo-container'><img src={swish} alt="swish logo"/></div>
   
    </div>

    <div className='payment-div radio-third'>
        <div>
            <input 
                type="radio" 
                id="radio3" 
                name="payment"
                value="PayPal"
                onChange={setPayPal}
            />
            <label htmlFor='radio3'>PayPal</label>
        </div>
        
            <div className='logo-container'><img src={paypal} alt="paypal logo"/></div>
    </div>

    </form>



  )
}
