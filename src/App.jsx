import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ShopContextProvider from "./contexts/ShopContextProvider";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
	]);
	return (
		<ShopContextProvider>
			<RouterProvider router={router} />;
		</ShopContextProvider>
	);
}

export default App;
