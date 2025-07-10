import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">RBAC Dashboard</h1>
          <p className="text-sm text-gray-500">Role: {role}</p>
        </div>
        <div className="space-x-2">
          {["admin", "seller"].includes(role) && (
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              + Add Product
            </button>
          )}
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
