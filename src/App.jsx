import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ShopContextProvider from "./contexts/ShopContextProvider";
import CartPage from "./pages/CartPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./pages/ProductDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import EditProduct from "./pages/dashboard/EditProduct";
import MainDashboard from "./layouts/MainDashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/dashboard/Inventory";
import AddProduct from "./pages/dashboard/AddProduct";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <MainDashboard />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "/dashboard/:id",
          element: (
            <ErrorBoundary>
              <ProductDetails />
            </ErrorBoundary>
          ),
        },
        {
          path: "/dashboard/edit/:id",
          element: <EditProduct />,
        },
        {
          path: "addProduct",
          element: <AddProduct />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ShopContextProvider>
  );
}

export default App;
