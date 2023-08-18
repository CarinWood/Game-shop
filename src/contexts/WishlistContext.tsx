import {ReactNode, createContext, useContext, useState } from "react";

type WishListProviderProps = {
    children: ReactNode
}

type WishListContext = {
    wishList: wishItem[]
    setWishList: React.Dispatch<React.SetStateAction<wishItem[]>>
}

type wishItem = {
    id: number
    title: string
    url: string
    price: number
    quantity: number   
}

const WishListContext = createContext({} as WishListContext)

export function useWishList() {
    return useContext(WishListContext)
}

export function WishListProvider({children}: WishListProviderProps) {
    const [wishList, setWishList] = useState<wishItem[]>([])

    return (
        <WishListContext.Provider value={{wishList, setWishList}}>
                {children}
        </WishListContext.Provider>
    )
}