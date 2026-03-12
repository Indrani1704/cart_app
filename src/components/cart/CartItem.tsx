import DeleteIcon from "@mui/icons-material/Delete"
import StarIcon from "@mui/icons-material/Star"
import { IconButton } from "@mui/material"
import type { CartItemProps } from "../../interfaces/component.interface"
import { useCart } from "../../hooks/useCart"

export default function CartItem({ item }: CartItemProps) {

  const { dispatch } = useCart()

  return (

    <div className="flex gap-6 border-b py-6">

      {/* Image + Quantity */}
      <div className="flex flex-col items-center gap-3">

        <img
          src={item.image}
          alt={item.title}
          className="h-28 w-28 object-contain"
        />

        <div className="flex items-center border rounded">

          <button
            className="px-3 py-1 text-lg"
            onClick={() =>
              dispatch({
                type: "DECREASE_QTY",
                payload: item.id
              })
            }
          >
            -
          </button>

          <span className="px-4">
            {item.quantity}
          </span>

          <button
            className="px-3 py-1 text-lg"
            onClick={() =>
              dispatch({
                type: "INCREASE_QTY",
                payload: item.id
              })
            }
          >
            +
          </button>

        </div>

      </div>

      {/* Product Details */}
      <div className="flex-1">

        {/* Title */}
        <h2 className="text-sm text-gray-800 font-medium">
          {item.title}
        </h2>

        {/* Ratings (Flipkart style) */}
        <div className="flex items-center gap-2 mt-1">

          <span className="flex items-center bg-green-600 text-white text-xs px-2 py-[2px] rounded">

            4.3

            <StarIcon sx={{ fontSize: 14, ml: 0.3 }} />

          </span>

          <span className="text-gray-500 text-xs">
            1,245 Ratings
          </span>

        </div>

        {/* Seller */}
        <p className="text-xs text-gray-500 mt-1">
          Seller: RetailNet
        </p>

        <p className="text-green-600 text-sm mt-1">
          Special Price
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-2">

          <span className="text-lg font-semibold">
            ₹{item.price}
          </span>

          <span className="text-gray-400 line-through text-sm">
            ₹{item.price + 2000}
          </span>

          <span className="text-green-600 text-sm font-medium">
            20% off
          </span>

        </div>

        {/* Delivery */}
        <p className="text-xs text-gray-500 mt-2">
          Delivery by Tomorrow | ₹40
        </p>

        {/* Actions */}
        <div className="flex gap-6 mt-4 text-sm font-medium">

          <button className="hover:text-[#2874f0]">
            SAVE FOR LATER
          </button>

          <button
            className="hover:text-[#2874f0]"
            onClick={() =>
              dispatch({
                type: "REMOVE_ITEM",
                payload: item.id
              })
            }
          >
            REMOVE
          </button>

        </div>

      </div>

      {/* Delete Icon */}
      <IconButton
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: item.id
          })
        }
      >
        <DeleteIcon />
      </IconButton>

    </div>
  )
}