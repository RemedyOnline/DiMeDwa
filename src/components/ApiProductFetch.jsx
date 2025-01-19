import { Grid, List, Search } from "lucide-react";
import { useContext, useEffect, useState, useCallback } from "react";
import { apiGetProducts } from "../services/products";
import SectionHeading from "./SectionHeading";
import ApiProductItem from "./ApiProductItem";
import { toast } from "react-toastify";
import { ShopContext } from "../contexts/ShopContextProvider";
import { Link } from "react-router-dom";

const ApiProductFetch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [apiProducts, setApiProducts] = useState([]);
  const [gridView, setGridView] = useState(true);
  const [loading, setLoading] = useState(false);
  const { addToCart, cartItems } = useContext(ShopContext);
  const [favorited, setFavorited] = useState({});

  const handleFavorited = (productId) => {
    setFavorited((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("API Item added to cart successfully");
  };

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const request = await apiGetProducts({
        productName: { $regex: searchValue },
      });

      const response = await request.data;
      setApiProducts(response);
      console.log("API Response: ", response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className="mx-auto my-2 max-w-7xl md:px-10">
      <div
        className={`sticky top-2 z-20 mx-auto flex h-fit w-[110px] items-center rounded-full bg-theme-color px-2 py-1.5 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] transition-all duration-300 sm:w-[270px] sm:px-2 sm:py-1.5 md:w-[350px] md:p-2 lg:w-[500px]`}
      >
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for any item... Electronics, Groceries, Furniture, Appliances..."
          className="w-full bg-transparent px-1 text-xs font-normal text-white outline-none placeholder:text-xs placeholder:text-green-100 sm:text-sm md:px-2 lg:text-base"
        />
        <Search size={16} className="text-green-100" />
      </div>
      <div className="flex justify-between pb-4 pt-8">
        <SectionHeading heading="All Products" />
        <div className="flex items-center gap-1 md:gap-2">
          <Grid
            onClick={() => setGridView(true)}
            className={`cursor-pointer text-xl hover:text-hoverBG md:text-3xl ${
              gridView ? "" : "text-fadedText"
            }`}
          />
          <List
            onClick={() => setGridView(false)}
            className={`cursor-pointer text-2xl hover:text-hoverBG md:text-4xl ${
              !gridView ? "" : "text-fadedText"
            }`}
          />
        </div>
      </div>
      <div className="min-h-[400px]">
        {loading ? (
          <div className="flex h-[400px] w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-theme-color border-t-transparent"></div>
              <p className="text-lg font-semibold text-theme-color">
                Loading products...
              </p>
            </div>
          </div>
        ) : apiProducts.length === 0 ? (
          <div className="flex h-[400px] w-full items-center justify-center">
            <p className="text-lg font-semibold text-gray-500">
              No products found
            </p>
          </div>
        ) : (
          <div
            className={`entireSpace ${
              gridView
                ? "grid grid-cols-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                : "flex flex-col md:grid md:grid-cols-2"
            } gap-4`}
          >
            {apiProducts.map((product, index) => (
              <Link
                to={`/dashboard/inventory/${product.id}`}
                key={product.id || index}
              >
                <ApiProductItem
                  {...product}
                  index={index}
                  favorited={favorited[product.id]}
                  gridView={gridView}
                  cartItems={cartItems}
                  handleAddToCart={() => handleAddToCart(product.id)}
                  handleFavorited={() => handleFavorited(product.id)}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ApiProductFetch;
