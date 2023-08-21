import '../styles/checkout.css'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { ShippingComponent } from '../components/ShippingComponent'
import { PaymentComponent } from '../components/PaymentComponent';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { RedeemCode } from '../components/redeemCode/RedeemCode';



export const Checkout = () => {

    const {total, setCart} = useShoppingCart()
    const [openShipping, setOpenShipping] = useState<boolean>(false)
    const [openPayment, setOpenPayment] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState('free')
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [paymentMethod, setPaymentMethod] = useState<string>('Klarna')
    const [hasDiscount, setHasDiscount] = useState<boolean>(false)
    const [discount, setDiscount] = useState<number>(0)
  
    const navigate = useNavigate();

    const toggleShipping = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setOpenShipping(true);
    }

    const calculateTotal = () => {
        let freight:number; 
        selectedOption === 'express' ? freight = 15 : freight = 0;
        
        if (hasDiscount) {
            let tot:number = total + freight- discount;
            return parseFloat(tot.toFixed(2));
        } else {
               let tot:number = total + freight;
                return parseFloat(tot.toFixed(2));
        }
     
    }

    const openMessage = () => {
        setShowMessage(true);
        setOpenPayment(false)
        setOpenShipping(false)
    }

    const resetAll = () => {
        setCart([])
        navigate('/')
    }


  

  return (
    <>
    <div className="checkout-container">
      
       
        <div className='information-form'>
        {showMessage === false &&
        <form onSubmit={toggleShipping}>
        
            <p className='checkout-headline'>Your information</p>
            <div className='name-div'>
                    <input 
                        required
                        placeholder='First name' 
                        className='name-input first'
                    />
                    <input
                        required
                        placeholder='Last Name'
                        className='name-input second'
                    />
            </div>


            <input
                required
                placeholder='Address'
                className='address-input'
            />

            <div className='zip-country-div'>
                    <input
                        required
                        placeholder='Zip Code'
                        className='zip-code-input'
                    />
                    <input
                        required
                        placeholder='County'
                        className='county-input'
                    />
            </div>
                    <button className='continue-btn'>Continue<IoMdArrowDropdown/></button>
        
            </form>
            }

            {openShipping &&
            <ShippingComponent 
            setOpenPayment={setOpenPayment} 
            setSelectedOption={setSelectedOption}/>
            }

            {openPayment &&
            <PaymentComponent setPaymentMethod={setPaymentMethod}/>
            }

            {openPayment && 
                <RedeemCode setHasDiscount={setHasDiscount} setDiscount={setDiscount}/>
            }

<div className={openPayment ? 'final-cost-div visible': 'final-cost-div hidden'}>
        <p className='total-text'>Subtotal: ${total}</p>
        <p className='total-text'>Shipping cost: {selectedOption === 'express' ? '+$15' : '$0' }</p>
        {hasDiscount && <p className='total-text'>10% discount: -${discount}</p>}
        <p className='line'></p>
        <p className='final-total'>Total: ${calculateTotal()}</p>
</div>
</div>
       
        
        <button 
            className={openPayment ? 'pay-btn visible': 'pay-btn hidden'} 
            onClick={openMessage}>
                Pay
            </button>

            {showMessage &&    
            <div className='message-container'>
                <p className='thank-you-text'>Thank you for you purchase!</p>
                <p className='successful-text'><b>${calculateTotal()}</b> has successfully been paid with {paymentMethod}</p>
                <button className='ok-btn' onClick={resetAll}>OK</button>
            </div>
            }
  
    </div>
    <Footer color="grey"/>
    </>
  )
}
 