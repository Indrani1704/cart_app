import { useCart } from "../../hooks/useCart"

export default function CartSummary() {

  const { state } = useCart()

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalMRP = state.items.reduce(
    (sum, item) => sum + (item.price + 2000) * item.quantity,
    0
  )

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const discount = totalMRP - totalPrice

  const delivery = totalPrice > 0 ? 0 : 0

  const finalAmount = totalPrice + delivery

  return (

    <div>

      <h2 className="text-gray-500 text-sm border-b pb-3 mb-4 font-medium">
        PRICE DETAILS
      </h2>

      {/* Price */}
      <div className="flex justify-between mb-3 text-sm">

        <span>Price ({totalItems} items)</span>
        <span>₹{totalMRP}</span>

      </div>

      {/* Discount */}
      <div className="flex justify-between mb-3 text-sm">

        <span>Discount</span>

        <span className="text-green-600">
          −₹{discount}
        </span>

      </div>

      {/* Delivery */}
      <div className="flex justify-between mb-3 text-sm">

        <span>Delivery Charges</span>

        <span className="text-green-600">
          FREE
        </span>

      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold border-t pt-3 text-base">

        <span>Total Amount</span>

        <span>₹{finalAmount}</span>

      </div>

      {/* Savings */}
      <p className="text-green-600 text-sm mt-3 border-t pt-3">

        You will save ₹{discount} on this order

      </p>

      {/* Order Button */}
      <button className="w-full bg-[#fb641b] text-white py-3 mt-6 font-semibold rounded-sm hover:bg-[#e85a14] transition">

        PLACE ORDER

      </button>

    </div>
  )
}