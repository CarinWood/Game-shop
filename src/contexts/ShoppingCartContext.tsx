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
    addToQuantity: () => void
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    quantity: number
    cart: cartItem[]
    setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;
    decreaseQuantity: () => void
}


const shoppingCartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
        const [open, setOpen] = useState<boolean>(false)
        const [quantity, setQuantity] = useState(0);
        const [cart, setCart] = useState<cartItem[]>([])


      
        const addToQuantity = () => setQuantity(quantity + 1)
        const decreaseQuantity = () => setQuantity(quantity -1)

        
        
     

        return (
            <shoppingCartContext.Provider value={{
                open,
                setOpen,
                quantity,
                addToQuantity,
                cart, 
                setCart,
                decreaseQuantity
                }}
            >
                {children}
            </shoppingCartContext.Provider>
        )
}