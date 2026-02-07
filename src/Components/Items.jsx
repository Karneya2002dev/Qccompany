import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Sample data for all categories
const categoryProducts = {
  anchor: [{ name: "Anchor Bolt", partNumber: "A001", availability: "Available", finish: "Standard", img: "/images/anchor1.png" }],
  fasteners: [{ name: "Hex Bolt", partNumber: "F001", availability: "Available", finish: "Zinc", img: "/images/bolt1.png" }],
  fittings: [{ name: "Valve", partNumber: "FI001", availability: "Available", finish: "Stainless", img: "/images/valve1.png" }],
  nut: [
    { name: "HEX NUTS", partNumber: "MF41001", availability: "Available in CS, MS & SS", finish: "Standard", img: "/images/nut1.png" },
    { name: "HEAVY HEX NUTS", partNumber: "MF42001", availability: "Available in CS, MS & SS", finish: "Standard", img: "/images/nut2.png" },
    { name: "INCH HEX NUTS", partNumber: "MF43001", availability: "Available in CS, MS & SS", finish: "Standard", img: "/images/nut3.png" },
    { name: "JAM/CHECK NUTS", partNumber: "MF44001", availability: "Available in CS, MS & SS", finish: "Standard", img: "/images/nut4.png" }
  ],
  screws: [{ name: "Hex Head Screw", partNumber: "S001", availability: "Available", finish: "Steel", img: "/images/screw1.png" }],
  washer: [{ name: "Flat Washer", partNumber: "W001", availability: "Available", finish: "Zinc", img: "/images/washer1.png" }],
  "pipe support / conduit accessories": [{ name: "Pipe Support", partNumber: "PS001", availability: "Available", finish: "Galvanized", img: "/images/pipe1.png" }],
  "unistruct accessories": [{ name: "Flat Fitting", partNumber: "UA001", availability: "Available", finish: "Steel", img: "/images/fitting1.png" }],
  "general items": [{ name: "Misc Item", partNumber: "G001", availability: "Available", finish: "Standard", img: "/images/general1.png" }]
};

const Items = () => {
  const { category } = useParams();
  const products = categoryProducts[category] || [];
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Inquiry Submitted:", data);
    alert("Inquiry submitted successfully!");
    closeModal();
  };

  return (
    <div className="py-12 px-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &gt;{" "}
        <Link to="/product" className="hover:underline">Products</Link> &gt; {category.toUpperCase()}
      </div>

      <h2 className="text-3xl font-bold mb-8">{category.toUpperCase()}</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-2xl transition flex flex-col">
            <img src={p.img} alt={p.name} className="w-full h-32 object-contain mb-4" />
            <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
            <p className="text-sm">Part Number: {p.partNumber}</p>
            <p className="text-sm">{p.availability}</p>
            <p className="text-sm mb-4">Material finish: {p.finish}</p>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-auto"
              onClick={() => openModal(p)}
            >
              Inquiry Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Inquiry for {selectedProduct?.name}</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" name="name" required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input type="tel" name="phone" required className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" rows="3" className="w-full border px-3 py-2 rounded" defaultValue={`I am interested in ${selectedProduct?.name}`} />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
