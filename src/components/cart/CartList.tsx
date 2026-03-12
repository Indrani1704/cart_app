import { useCart } from "../../hooks/useCart"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

export default function CartList() {

  const { state } = useCart()

  if (state.items.length === 0) {

    return (

      <div className="flex flex-col items-center justify-center py-16 text-center">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          className="h-32 mb-6"
        />

        <h2 className="text-lg font-semibold">
          Your cart is empty!
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Add items to it now.
        </p>

        <Link
          to="/"
          className="mt-6 bg-[#2874f0] text-white px-6 py-2 rounded-sm font-medium hover:bg-[#1f5edb]"
        >
          Shop Now
        </Link>

      </div>

    )
  }

  return (

    <div className="divide-y">

      {state.items.map(item => (

        <CartItem
          key={item.id}
          item={item}
        />

      ))}

    </div>

  )
}