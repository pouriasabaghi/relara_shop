import { useCart } from "@/context/CartContext";
import ShopCard from "./ShopCard";

export default function MiniShopCart() {
  const {cartItems} = useCart()
  return (
    <div className="fixed right-10 top-20 z-50 rounded-md border border-gray-200 bg-white p-3 shadow-lg">
  {cartItems.length > 0 ? <div>
        <div className="space-y-2 max-h-72 mb-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
       { cartItems.map((item) => (
          <ShopCard key={item.id} title={item.title} price={item.price} image={item.image} quantity={item.quantity} id={item.id}/>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-black">Total:</span>
          <span className="text-black">${cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full rounded-md bg-customPrimary px-4 py-2 text-sm font-bold text-white transition hover:bg-primaryDark">
          Checkout
        </button>
        <button className="mt-2 w-full rounded-md border border-customPrimary bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-primaryDark hover:text-white">
          View Cart
        </button>
      </div>
  </div>: <p className="text-black p-3">Your shopping cart is empty.</p>}
    </div>
  );
}
