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
    setLoading(false);
    const request = await apiGetProducts({
      productName: { $regex: searchValue },
    });

    const response = await request.data;
    setApiProducts(response);
    console.log("API Response: ", response);
  }, [searchValue]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return (
      <div className="mx-auto my-auto flex h-screen w-screen items-center justify-center">
        <h2 className="font-mono text-2xl font-bold text-theme-color">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <section className="mx-auto my-2 max-w-7xl px-3 sm:px-5 md:px-10">
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
      <div className="flex justify-between px-3 pb-4 pt-8">
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
      <div
        className={`entireSpace ${
          gridView
            ? "grid grid-cols-2 items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            : "flex flex-col md:grid md:grid-cols-2"
        } gap-4`}
      >
        {apiProducts.map((product, index) => {
          console.log(`${index}: ${product.images}`);
          return (
            <Link to={`/products/${product.id}`} key={product.id || index}>
              <ApiProductItem
                key={product.id || index}
                id={product.id}
                images={product.images}
                productName={product.productName}
                price={product.price}
                category={product.category}
                discountPercentage={product.discountPercentage}
                description={product.description}
                discountedPrice={product.discountedPrice}
                avatar={product.avatar}
                index={index}
                favorited={favorited[product.id]}
                gridView={gridView}
                cartItems={cartItems}
                handleAddToCart={() => handleAddToCart(product.id)}
                handleFavorited={() => handleFavorited(product.id)}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ApiProductFetch;
