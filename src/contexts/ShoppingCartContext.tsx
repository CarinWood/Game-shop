import {ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number
    title: string
    url: string
    price: number
    quantity: number
}

type shoppingCartContext = {
   
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    quantity: number
    setQuantity: React.Dispatch<React.SetStateAction<number>>
    cart: cartItem[]
    setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;
    total: number
    setTotal: React.Dispatch<React.SetStateAction<number>>
    handlePlus: (id: number) => void;
  
}


const shoppingCartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
        const [open, setOpen] = useState<boolean>(false)
        const [quantity, setQuantity] = useState(0);
        const [cart, setCart] = useState<cartItem[]>([])
        const [total, setTotal] = useState(0)

        const handlePlus = (id: number) => {

            const updatedCart = cart.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }; 
              }
              return item;
            });
          
            setCart(updatedCart);
          };

        return (
            <shoppingCartContext.Provider value={{
                open,
                setOpen,
                quantity,
                setQuantity,
                cart, 
                setCart,
                total,
                setTotal,
                handlePlus
                }}
            >
                {children}
            </shoppingCartContext.Provider>
        )
}