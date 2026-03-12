import type { Product } from "./product.interface"
import type { CartItem } from "./cart.interface"

export interface ProductCardProps {
  product: Product
}

export interface CartItemProps {
  item: CartItem
}