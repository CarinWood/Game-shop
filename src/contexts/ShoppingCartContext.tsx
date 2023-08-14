import {ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type shoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    open: boolean
}


const shoppingCartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
        const [open, setOpen] = useState(false)

        const openCart = () => setOpen(true)
        const closeCart = () => setOpen(false)

        return (
            <shoppingCartContext.Provider value={{
                openCart,
                closeCart,
                open
                }}
            >
                {children}
            </shoppingCartContext.Provider>
        )
}