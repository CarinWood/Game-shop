import '../styles/checkout.css'

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
          
            <input type="radio" id="radio1" name="payment"/>
            <label htmlFor="radio1">Credit card</label>

            <input type="radio" id="radio2" name="payment"/>
            <label htmlFor='radio2'>Invoice</label>
            
            <input type="radio" id="radio3" name="payment"/>
            <label htmlFor='radio3'>Swisch</label>
        </div>
    </div>
  )
}
