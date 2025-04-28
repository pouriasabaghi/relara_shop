"use client"

import { useCart } from "@/context/CartContext"

type Product = {
  id: string,
  title: string,
  price: string,
  quantity: number
  image: string
}

export default function AddToCart({id, title, price, quantity, image}:Product) {
    const {addToCart} = useCart()

    const addToCartHandler = () =>{
        addToCart({
          id: id,
          image: image,
          title: title,
          price: price,
          quantity: quantity,
        })
      }

  return (
    <button className="w-full rounded-md bg-customPrimary py-3 text-white transition-all hover:bg-primaryDark" onClick={addToCartHandler}>
    Add to Cart
  </button>
  )
}
