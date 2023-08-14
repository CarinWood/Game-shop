import {ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type shoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    addToQuantity: () => void
    open: boolean
    quantity: number
}


const shoppingCartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
        const [open, setOpen] = useState(false)
        const [quantity, setQuantity] = useState(0);


        const openCart = () => setOpen(true)
        const closeCart = () => setOpen(false)
        const addToQuantity = () => setQuantity(quantity + 1)

        
        
     

        return (
            <shoppingCartContext.Provider value={{
                openCart,
                closeCart,
                open,
                quantity,
                addToQuantity
                }}
            >
                {children}
            </shoppingCartContext.Provider>
        )
}