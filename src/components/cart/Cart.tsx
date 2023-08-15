import { useEffect } from "react";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import "./cart.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { RiCloseCircleFill } from "react-icons/ri";


export const Cart = () => {
  const { setOpen, open, cart, setCart, decreaseQuantity, addToQuantity} = useShoppingCart();



  useEffect(() => {
      calculateQuantity()

  }, [cart])



  const calculateQuantity = () => {
    let sum:number = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].quantity;
        
      }

      console.log(sum)
  }




  const remove = (id: number) => {
      setCart(cart.filter((prevItem) => prevItem.id !== id))
      decreaseQuantity()
  }
 
  const handlePlus = (id: number) => {
    addToQuantity()
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }; // Update the quantity property
      }
      return item;
    });
  
    setCart(updatedCart);
  };


  const handleMinus = (id: number) => {
    decreaseQuantity()
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }; // Update the quantity property
      }
      return item;
    });
    const filteredCart = updatedCart.filter(item => item.quantity > 0);
      setCart(filteredCart);

  }

  const handleCloseClick = () => {
    setOpen(false)
  }

  return (
    <div className={open ? "cart active" : "cart inactive"} >
      <p onClick={()=> handleCloseClick()}>
      <RiCloseCircleFill className="close-cart-btn"/>
      </p>
      {cart.length === 0 && 
      <p className="empty-text">Your cart is empty ;-(</p>}
    
          {cart.map((item) => {
            return <div key={item.id} className="cart-item">
                        <img src={item.url} className="cart-image"/>
                        <div>
                          <p className="cart-title">{item.title}</p>
                          <div className="price-div">
                              <p onClick={() => remove(item.id)}>
                              <FaRegTrashCan className="trash" />
                              </p>
                              <p className="minus" onClick={() => handleMinus(item.id)}>-</p>
                              <span className="quant-space">{item.quantity}</span>
                              <p className="plus" onClick={()=>handlePlus(item.id)}>+</p>
                              <p className="cart-price">${item.price}</p>
                          </div>
                        </div>
                    </div>
          })}
 
      <button className="checkout-btn">Checkout</button>
      <p className="tot">Subtotal: <span>$ 5329</span></p>
    </div>
  );
};
