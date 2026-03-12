import { createContext, useReducer, useEffect } from "react"
import { cartReducer } from "../reducers/cartReducer"
import type { CartContextType } from "../interfaces/context.interface"
import type { CartState } from "../interfaces/cart.interface"
import { loadCart, saveCart } from "../utils/storage"

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: any) => {

  const initialState: CartState = {
    items: loadCart()
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    saveCart(state.items)
  }, [state.items])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}