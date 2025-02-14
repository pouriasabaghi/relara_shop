import ShopCard from "./ShopCard";

export default function MiniShopCart() {
  return (
    <div className="fixed right-10 top-20 z-50 rounded-md border border-gray-200 bg-white p-3 shadow-lg">
      <div className="space-y-2 max-h-72 mb-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-black">Total:</span>
          <span className="text-black">$1199</span>
        </div>
        <button className="mt-4 w-full rounded-md bg-customPrimary px-4 py-2 text-sm font-bold text-white transition hover:bg-primaryDark">
          Checkout
        </button>
        <button className="mt-2 w-full rounded-md border border-customPrimary bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800 transition-all hover:bg-primaryDark hover:text-white">
          View Cart
        </button>
      </div>
    </div>
  );
}
