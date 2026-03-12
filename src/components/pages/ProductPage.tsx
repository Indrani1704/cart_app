import Sidebar from "../../components/layout/Sidebar"
import ProductGrid from "../../components/products/ProductGrid"

export default function HomePage() {

  return (

    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-[1400px] mx-auto flex gap-4 p-4">

        <Sidebar />

        <div className="flex-1">
          <ProductGrid />
        </div>

      </div>

    </div>

  )
}