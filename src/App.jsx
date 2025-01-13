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
      path: "/product/:id",
      element: <ProductDetails />,
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
