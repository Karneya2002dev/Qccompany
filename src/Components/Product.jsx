import React, { useState } from "react";
import { Anchor, Bolt, Box, Grid, Package, Settings, Wrench, Nut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const productsData = [
  { category: "Anchor", icon: <Anchor className="text-purple-500 w-8 h-8" />, items: ["Anchoring solutions for construction and industrial applications"] },
  { category: "Fasteners", icon: <Bolt className="text-yellow-500 w-8 h-8" />, items: ["Hex Bolt (Partial & Full Threaded)", "Heavy Hex Bolt", "Countersunk Allen Bolt", "U-Bolts & Square Bend U-Bolts", "Socket Head Allen Bolt"] },
  { category: "Fittings", icon: <Settings className="text-blue-500 w-8 h-8" />, items: ["Valves", "Flanges", "Gaskets", "Butt Weld (BW) Fittings", "Forged Fittings"] },
  { category: "Nut", icon: <Nut className="text-indigo-500 w-8 h-8" />, items: ["Hex Nut", "Lock Nut", "Square Nut", "Cap Nut", "Wing Nut"] },
  { category: "Screws", icon: <Bolt className="text-red-500 w-8 h-8" />, items: ["Hex Head Self-Drilling Screw", "Countersunk Self-Drilling Screw", "Pan Head Tapping Screw", "Flat Head Tapping Screw", "Oval Head Tapping Screw"] },
  { category: "Washer", icon: <Wrench className="text-green-500 w-8 h-8" />, items: ["Flat Washer", "Spring Washer", "Special OD Washer", "Nordlock/DTI Washer", "Square Washer"] },
  { category: "Pipe Support / Conduit Accessories", icon: <Box className="text-indigo-600 w-8 h-8" />, items: ["Support systems for piping and conduits"] },
  { category: "Unistruct Accessories", icon: <Grid className="text-pink-500 w-8 h-8" />, items: ["Flat Fittings", "Angle Fittings", "Z Shape Fittings"] },
  { category: "General Items", icon: <Package className="text-gray-500 w-8 h-8" />, items: ["Miscellaneous products for various applications"] },
];

const ProductSection = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", ...productsData.map((p) => p.category)];

  const displayedProducts = filter === "All"
    ? productsData
    : productsData.filter((p) => p.category === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border ${
                filter === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              } transition`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProducts.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                {category.items.slice(0, 5).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => navigate(`/products/${category.category.toLowerCase()}`)}
                className="text-blue-600 font-medium hover:underline cursor-pointer mt-auto"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
