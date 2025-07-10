import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const res = await API.post("/auth/login", form);
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("role", res.data.role);
  toast.success("Login successful!");
  navigate("/dashboard");
} catch (err) {
  toast.error(err.response?.data?.message || "Login failed");
}
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Login</button>
        <p className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></p>
      </form>
    </div>
  );
}

export default Login;
