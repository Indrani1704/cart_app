import { Checkbox, FormControlLabel, Slider } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

export default function Sidebar() {

  return (

    <aside className="bg-white w-[250px] border-r p-4 h-fit">

      {/* Filters Title */}
      <h2 className="text-lg font-semibold mb-4">
        Filters
      </h2>

      {/* Categories */}
      <div className="border-t pt-4">

        <h3 className="font-medium text-sm mb-2">
          Categories
        </h3>

        <ul className="text-sm text-gray-700 space-y-1">

          <li className="cursor-pointer hover:text-[#2874f0]">
            Electronics
          </li>

          <li className="cursor-pointer hover:text-[#2874f0]">
            Fashion
          </li>

          <li className="cursor-pointer hover:text-[#2874f0]">
            Mobiles
          </li>

          <li className="cursor-pointer hover:text-[#2874f0]">
            Laptops
          </li>

        </ul>

      </div>

      {/* Price Filter */}
      <div className="border-t pt-4 mt-4">

        <h3 className="font-medium text-sm mb-2">
          Price
        </h3>

        <Slider
          defaultValue={[500, 5000]}
          min={0}
          max={10000}
          valueLabelDisplay="auto"
        />

      </div>

      {/* Rating Filter */}
      <div className="border-t pt-4 mt-4">

        <h3 className="font-medium text-sm mb-2">
          Customer Ratings
        </h3>

        <div className="flex flex-col">

          <FormControlLabel
            control={<Checkbox />}
            label={
              <span className="flex items-center text-sm">
                4 <StarIcon sx={{ fontSize: 16 }} /> & above
              </span>
            }
          />

          <FormControlLabel
            control={<Checkbox />}
            label={
              <span className="flex items-center text-sm">
                3 <StarIcon sx={{ fontSize: 16 }} /> & above
              </span>
            }
          />

        </div>

      </div>

      {/* Brand Filter */}
      <div className="border-t pt-4 mt-4">

        <h3 className="font-medium text-sm mb-2">
          Brand
        </h3>

        <div className="flex flex-col">

          <FormControlLabel
            control={<Checkbox />}
            label="Apple"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Samsung"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Dell"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="HP"
          />

        </div>

      </div>

      {/* Discount */}
      <div className="border-t pt-4 mt-4">

        <h3 className="font-medium text-sm mb-2">
          Discount
        </h3>

        <div className="flex flex-col">

          <FormControlLabel control={<Checkbox />} label="10% or more" />

          <FormControlLabel control={<Checkbox />} label="25% or more" />

          <FormControlLabel control={<Checkbox />} label="50% or more" />

        </div>

      </div>

    </aside>

  )
}