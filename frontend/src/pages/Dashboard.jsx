import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>

      {loading ? (
        <div className="flex justify-center items-center text-gray-500 text-lg">
          <AiOutlineLoading3Quarters className="animate-spin mr-2" />
          Loading products...
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p._id} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-1">{p.name}</h3>
              <p className="text-gray-700 mb-1">₹ {p.price}</p>
              <p className="text-xs text-gray-500">Public: {p.isPublic ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </Layout>
  );
}

export default Dashboard;
