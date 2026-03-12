import CartList from "../../components/cart/CartList"
import CartSummary from "../../components/cart/CartSummary"
import { useCart } from "../../hooks/useCart"

export default function CartPage() {

  const { state } = useCart()

  return (

    <div className="bg-gray-100 min-h-screen py-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">

        {/* Cart Items */}
        <div className="md:col-span-2">

          <div className="bg-white border">

            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">

              <h2 className="text-lg font-semibold">
                My Cart ({state.items.length})
              </h2>

              <span className="text-sm text-gray-500">
                Deliver to: Kolkata
              </span>

            </div>

            {/* Cart Items */}
            <div className="p-4">

              <CartList />

            </div>

            {/* Bottom Place Order Button */}
            <div className="flex justify-end border-t p-4 bg-gray-50">

              <button className="bg-[#fb641b] text-white px-8 py-3 font-semibold rounded-sm hover:bg-[#e85a14] transition">

                PLACE ORDER

              </button>

            </div>

          </div>

        </div>

        {/* Price Details */}
        <div className="bg-white border p-4 h-fit sticky top-20">

          <CartSummary />

        </div>

      </div>

    </div>
  )
}