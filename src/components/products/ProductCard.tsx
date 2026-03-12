import { Button, IconButton } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { motion } from "framer-motion"
import type { ProductCardProps } from "../../interfaces/component.interface"
import { useCart } from "../../hooks/useCart"

export default function ProductCard({ product }: ProductCardProps) {

  const { dispatch } = useCart()

  return (

    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 rounded-sm p-4 hover:shadow-lg transition-all duration-200 relative"
    >

      {/* Wishlist */}
      <IconButton
        size="small"
        className="!absolute top-2 right-2 bg-white shadow-sm"
      >
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>

      {/* Product Image */}
      <div className="h-44 flex items-center justify-center">

        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />

      </div>

      {/* Title */}
      <h2 className="text-sm text-gray-700 mt-3 line-clamp-2 hover:text-[#2874f0]">

        {product.title}

      </h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">

        <span className="flex items-center text-xs bg-green-600 text-white px-2 py-[2px] rounded">

          4.3 <StarIcon sx={{ fontSize: 14, ml: 0.3 }} />

        </span>

        <span className="text-gray-500 text-xs">
          (1,245)
        </span>

      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 mt-2">

        <span className="text-lg font-semibold text-gray-900">
          ₹{product.price}
        </span>

        <span className="text-gray-400 line-through text-sm">
          ₹{product.price + 2000}
        </span>

        <span className="text-green-600 text-sm font-medium">
          20% off
        </span>

      </div>

      {/* Delivery Text */}
      <p className="text-xs text-gray-500 mt-1">
        Free delivery
      </p>

      {/* Add To Cart */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          background: "#ff9f00",
          "&:hover": { background: "#fb8c00" },
          fontWeight: 600,
          textTransform: "none"
        }}
        onClick={() =>
          dispatch({ type: "ADD_ITEM", payload: product })
        }
      >
        Add to Cart
      </Button>

    </motion.div>

  )
}