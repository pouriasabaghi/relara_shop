'use client'

import { createContext, useContext, useState } from "react"

type CartItem = {
    id: string,
    quantity: number,
    name: string;
    image: string;
    price: string;
}

type CartContextType = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | ''>('')

export const CartProvider = ({children}:{children: React.ReactNode}) => {
    const [cart,setCart] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
       setCart((prevCart) => {
        const existingItem = cart.find((i) => i.id === item.id)
        if(existingItem){
            return prevCart.map((i) => i.id === existingItem.id ? {...i, quantity: i.quantity++ } : i)
       }else{
        return [...prevCart, item]
       }
    })
    }

    const removeFromCart = (id:string) => {
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== id))
    } 

    const clearCart = () => {   setCart([])

    }

    const value = {
        items: cart,
        addToCart,
        removeFromCart,
        clearCart
    }

    return ( <CartContext.Provider value={value}>{children}</CartContext.Provider> )
}

export const useCart = () => {
    return useContext(CartContext)
}