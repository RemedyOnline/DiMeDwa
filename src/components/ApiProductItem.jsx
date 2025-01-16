import { Heart, HeartOff, Plus } from "lucide-react";
import PropTypes from "prop-types";

const ApiProductItem = ({
  id,
  productName,
  category,
  images,
  discountPercentage,
  discountedPrice,
  handleAddToCart,
  favorited,
  handleFavorited,
  price,
  index,
  gridView,
  cartItems,
}) => {
  return (
    <section>
      <div
        className="entireSpace flex h-full w-full flex-wrap justify-center"
        key={index}
      >
        <div
          className={`${
            gridView ? "item h-full w-full px-2 py-5" : "flex w-full flex-col"
          } relative border border-theme-color border-opacity-20 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
        >
          <div
            className={`${
              gridView ? "items-start space-y-1" : "flex items-start gap-2"
            } `}
          >
            <div className="relative">
              <img
                src={`https://savefiles.org/${images}?shareable_link=440`}
                alt={productName}
                className={`${
                  gridView
                    ? "mx-auto sm:h-[150px] sm:w-[160px] md:h-[180px] md:w-[180px]"
                    : "p-2 md:h-[160px] md:w-[160px] lg:h-[160px] lg:w-[200px]"
                } h-[130px] w-[130px]`}
              />
              <span
                onClick={(e) => {
                  e.preventDefault();
                  handleFavorited;
                }}
                className="absolute right-2 top-0 rounded-full bg-slate-100 p-2 text-red-600 shadow-md hover:cursor-pointer hover:bg-slate-200"
              >
                {!favorited ? <Heart size={16} /> : <HeartOff size={16} />}
              </span>
              <span className="absolute bottom-2 right-2 bg-yellow-200 px-2 py-1 text-xs text-yellow-700 md:text-sm lg:text-base">
                -
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(discountPercentage)}
                %
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
                {productName}
              </p>
              <p
                className={`${
                  gridView ? "mx-auto" : ""
                } w-fit border border-theme-color border-opacity-20 p-1 text-xs text-gray-600 lg:text-sm`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
                  {price}.00
                </p>
                <p
                  className={`${
                    gridView ? "text-base lg:text-sm" : "text-base lg:text-base"
                  } flex items-center text-gray-400 line-through`}
                >
                  <span className="text-xs">GH₵</span>
                  {discountedPrice}
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
            } absolute bottom-2 right-2 flex items-center justify-center gap-1 rounded-md bg-theme-color px-2 py-1 text-xs hover:bg-hoverBG md:px-2 md:py-1 md:text-sm`}
            onClick={() => handleAddToCart(id)}
          >
            Add to Cart{" "}
            <span>
              <Plus size={16} />
            </span>
            {cartItems[id] > 0 && <>({cartItems[id]})</>}
          </button>
        </div>
      </div>
    </section>
  );
};

ApiProductItem.propTypes = {
  images: PropTypes.string,
  id: PropTypes.string,
  productName: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  discountedPrice: PropTypes.number,
  index: PropTypes.number,
  gridView: PropTypes.bool.isRequired,
  cartItems: PropTypes.object,
  favorited: PropTypes.bool,
  handleFavorited: PropTypes.func,
  handleAddToCart: PropTypes.func,
};

export default ApiProductItem;
