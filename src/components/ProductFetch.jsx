import { Grid, Heart, HeartOff, List, Plus } from "lucide-react";
import { useContext, useState } from "react";
import PRODUCTS from "../constants/products";
import { ShopContext } from "../contexts/ShopContextProvider";
import { toast } from "react-toastify";
import SectionHeading from "./SectionHeading";

const ProductFetch = () => {
  const [favorited, setFavorited] = useState(false);
  const [gridView, setGridView] = useState(true);
  const { addToCart, cartItems } = useContext(ShopContext);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("Item added to cart successfully");
  };

  const handleFavorited = () => {
    console.log(favorited);
    setFavorited((prev) => !prev);
  };

  return (
    <section className="mx-auto my-10 max-w-7xl px-3 sm:px-5 md:px-10">
      <div className="flex justify-between px-3 pb-4 pt-8">
        <SectionHeading heading="Top Selling Items" />
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
        {PRODUCTS.map((product, index) => (
          <div
            className="entireSpace flex h-full w-full flex-wrap justify-center"
            key={index}
          >
            <div
              className={`${
                gridView
                  ? "item h-full w-full px-2 py-5"
                  : "flex w-full flex-col"
              } relative border border-theme-color border-opacity-20 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
            >
              <div
                className={`${
                  gridView ? "items-start space-y-1" : "flex items-start gap-2"
                } `}
              >
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className={`${
                      gridView
                        ? "mx-auto sm:h-[150px] sm:w-[160px] md:h-[180px] md:w-[180px]"
                        : "p-2 md:h-[160px] md:w-[160px] lg:h-[160px] lg:w-[200px]"
                    } h-[130px] w-[130px]`}
                  />
                  <span
                    onClick={handleFavorited}
                    className="absolute right-2 top-0 rounded-full bg-slate-100 p-2 text-red-600 shadow-md hover:cursor-pointer hover:bg-slate-200"
                  >
                    {!product.favorited ? (
                      <Heart size={16} />
                    ) : (
                      <HeartOff size={16} />
                    )}
                  </span>
                  <span className="absolute bottom-2 right-2 bg-yellow-200 px-2 py-1 text-xs text-yellow-700 md:text-sm lg:text-base">
                    -{product.discount_percentage}%
                  </span>
                </div>
                <div
                  className={`${
                    gridView
                      ? "flex flex-col space-y-2 text-center"
                      : "space-y-2 p-2"
                  } `}
                >
                  <p
                    className={`${
                      gridView ? "" : "lg:text-lg"
                    } text-base font-semibold md:text-base`}
                  >
                    {product.title}
                  </p>
                  <p
                    className={`${
                      gridView ? "mx-auto" : ""
                    } w-fit border border-theme-color border-opacity-20 p-1 text-xs text-gray-600 lg:text-sm`}
                  >
                    {product.category}
                  </p>
                  <div
                    className={`${gridView ? "mx-auto flex items-center justify-start gap-2 pb-6 md:pb-6" : ""}`}
                  >
                    <p
                      className={`${
                        gridView ? "" : "lg:text-lg"
                      } pt-0 text-base font-semibold md:pt-0 md:text-lg`}
                    >
                      <sup className="text-xs text-highlightText">GH₵</sup>
                      {product.current_price}.00
                    </p>
                    <p
                      className={`${
                        gridView
                          ? "text-base lg:text-sm"
                          : "text-base lg:text-base"
                      } flex items-center text-gray-400 line-through`}
                    >
                      <span className="text-xs">GH₵</span>
                      {product.previous_price}
                      <sub>.00</sub>
                    </p>
                  </div>
                </div>
              </div>
              <button
                className={`${
                  gridView
                    ? "text-white md:bottom-4 md:right-4"
                    : "text-white md:bottom-4 md:right-4"
                } absolute bottom-2 right-2 flex items-center justify-center gap-1 rounded-md bg-theme-color p-1 text-xs hover:bg-hoverBG md:px-2 md:py-1 md:text-sm`}
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart{" "}
                <span>
                  <Plus size={16} />
                </span>
                {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFetch;
