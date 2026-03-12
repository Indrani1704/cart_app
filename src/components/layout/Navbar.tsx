import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SearchIcon from "@mui/icons-material/Search"
import { Badge, Button } from "@mui/material"
import { useCart } from "../../hooks/useCart"
import { Link } from "react-router-dom"

export default function Navbar() {

  const { state } = useCart()

  const cartCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (

    <nav className="bg-[#2874f0] text-white shadow">

      <div className="max-w-[1400px] mx-auto flex items-center gap-6 px-4 py-3">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold">Shopify</span>
          <span className="text-[11px] italic text-yellow-300">
            Explore Plus
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-xl">

          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 text-black outline-none rounded-l-sm"
          />

          <button className="bg-white px-4 flex items-center justify-center rounded-r-sm">

            <SearchIcon className="text-[#2874f0]" />

          </button>

        </div>

        {/* Login */}
        <Button
          variant="contained"
          sx={{
            background: "white",
            color: "#2874f0",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#f0f0f0" }
          }}
        >
          Login
        </Button>

        {/* Become Seller */}
        <span className="hidden md:block font-medium cursor-pointer">
          Become a Seller
        </span>

        {/* Cart */}
        <Link to="/cart" className="flex items-center gap-2">

          <Badge badgeContent={cartCount} color="error">

            <ShoppingCartIcon />

          </Badge>

          <span className="hidden md:block font-medium">
            Cart
          </span>

        </Link>

      </div>

    </nav>

  )
}