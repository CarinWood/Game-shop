import '../styles/checkout.css'
import paypal from '../assets/images/paypal.png'
import swish from '../assets/images/swish.png'
import klarna from '../assets/images/klarna.png'

export const Checkout = () => {
  return (
    <div className="checkout-container">
       
        <div className='information-form'>
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

            <p className='checkout-headline payment-method'>Payment Method</p>
          
            <div className='payment-div radio-first'>
                <div>
                    <input type="radio" id="radio1" name="payment"/>
                    <label htmlFor="radio1">Credit card</label>
                </div>
                    <div className='logo-container klarna'><img src={klarna} alt="klarna logo"/></div>
           
            </div>

            <div className='payment-div radio-second'>
                <div>
                    <input type="radio" id="radio2" name="payment"/>
                    <label htmlFor='radio2'>Swish</label>
                </div>
                    <div className='logo-container'><img src={swish} alt="swish logo"/></div>
           
            </div>

            <div className='payment-div radio-third'>
                <div>
                    <input type="radio" id="radio3" name="payment"/>
                    <label htmlFor='radio3'>PayPal</label>
                </div>
                
                    <div className='logo-container'><img src={paypal} alt="paypal logo"/></div>
            </div>
        </div>
    </div>
  )
}
 