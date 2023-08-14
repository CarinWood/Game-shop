import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import "./cart.css";
import { useEffect, useRef } from "react";

export const Cart = () => {
  const { open, closeCart } = useShoppingCart();
  let cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={open ? "cart active" : "cart inactive"} ref={cartRef}>
      <p>Your cart is empty ;-(</p>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};
