import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Products() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [form, setForm] = useState({ name: "", price: "", isPublic: false });

  // Restrict buyers
  if (role === "buyer") {
    navigate("/dashboard");
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  await API.post("/products", form);
  toast.success("Product created!");
  navigate("/dashboard");
} catch (err) {
  toast.error("Failed to create product");
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold mb-2">Create Product</h2>
        <input name="name" onChange={handleChange} placeholder="Product Name"  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" />
        <input name="price" type="number" onChange={handleChange} placeholder="Price"  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" />
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="isPublic" onChange={handleChange} />
          <span>Is Public?</span>
        </label>
        <button type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Create</button>
      </form>
    </div>
  );
}

export default Products;
