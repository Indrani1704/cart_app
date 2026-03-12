import type { CartState } from "./cart.interface"
import type { CartAction } from ".././types/cart.types"

export interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}