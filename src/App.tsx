import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import ProductPage from "./components/pages/ProductPage"
import CartPage from "./components/pages/CartPage"
import { CartProvider } from "./context/CartContext"

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<ProductPage />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

        </Routes>

      </BrowserRouter>

    </CartProvider>

  )
}

export default App