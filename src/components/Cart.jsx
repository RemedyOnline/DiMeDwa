import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../constants/products";
import { MinusCircle, PlusCircle } from "lucide-react";
import empty from "../assets/img/Empty.svg";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartQuantity,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalQuantity = getTotalCartQuantity();
  const navigate = useNavigate();

  return (
    <section
      className={`${
        totalAmount > 0
          ? "h-full w-full items-start justify-start"
          : "h-screen w-screen items-center justify-center"
      } relative flex flex-col`}
    >
      <h2
        className={`${
          totalAmount > 0
            ? "sticky -top-11 z-10 mx-auto pb-4 pt-14 text-base font-semibold md:-top-14 md:pt-16 md:text-xl lg:text-2xl"
            : "hidden"
        }`}
      >
        Your Cart Items
      </h2>
      <div className="w-full justify-start md:flex">
        <div
          className={`${
            totalAmount > 0
              ? "cart-items flex flex-col gap-3 px-4 sm:px-6 md:w-2/3 md:gap-4 md:px-8 lg:px-12"
              : "bg-green-100"
          }`}
        >
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] != 0) {
              return (
                <div
                  key={product.id}
                  className="shadow-highlightText mx-auto flex h-[120px] w-full items-center justify-start gap-3 rounded-lg bg-highlight p-2 shadow-sm sm:h-[130px] md:h-[140px] md:gap-5"
                >
                  <div className="h-[100px] w-[140px] sm:h-[110px] sm:w-[140px] md:h-[120px] md:w-[160px]">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex h-full w-full flex-col justify-start gap-1 md:gap-3">
                    <p className="text-lg font-semibold md:text-xl">
                      {product.title}
                    </p>
                    <p className="text-highlightText font-semibold md:text-lg">
                      <span className="pr-1 text-xs md:text-base">GH₵</span>
                      {product.current_price}.00
                    </p>
                    <div className="flex gap-1">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="hover:text-green-800"
                      >
                        <MinusCircle />
                      </button>
                      <input
                        value={cartItems[product.id]}
                        onChange={(e) =>
                          updateCartItemCount(
                            Number(e.target.value),
                            product.id,
                          )
                        }
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="border-highlightText text-highlightText w-16 border bg-transparent pl-2 text-center font-semibold outline-none md:text-lg"
                      />
                      <button
                        onClick={() => addToCart(product.id)}
                        className="hover:text-green-800"
                      >
                        <PlusCircle />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="fixed bottom-8 right-4 z-50 sm:top-28">
            <div className="summary mb:py-8 shadow-highlightText w-[230px] space-y-3 rounded-lg border border-green-300 bg-highlight px-3 py-5 text-theme-color shadow-sm sm:space-y-4 md:w-[280px] md:space-y-5 md:px-5 lg:w-[320px] lg:space-y-6 xl:w-[350px]">
              <h2 className="text-xl font-bold md:text-2xl">Summary</h2>
              <div className="space-y-1 md:space-y-2">
                <p className="sum-total flex items-center justify-between text-base font-semibold uppercase md:text-lg">
                  <span className="text-highlightText">Total Price* </span>
                  <span>
                    <sup className="text-xs">GH₵</sup>
                    {totalAmount}
                  </span>
                </p>
                <p className="sum-total-tax flex items-center justify-between text-base font-semibold uppercase md:text-lg">
                  <span className="text-highlightText">Tax charges (2%)</span> 2
                </p>
                <p className="sum-total-quantity flex items-center justify-between text-base font-semibold uppercase md:text-lg">
                  <span className="text-highlightText">Total Quantity*</span>{" "}
                  {totalQuantity}
                </p>
              </div>
              <div className="space-y-2 pb-1 md:pb-3">
                <button className="check-out-btn w-full cursor-pointer rounded-lg bg-theme-color px-3 py-2 text-sm font-medium uppercase text-white hover:bg-green-900 md:text-base">
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="check-out-btn w-full cursor-pointer rounded-lg border border-theme-color px-3 py-2 text-sm font-medium uppercase md:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex w-full flex-col space-y-4">
            <img src={empty} alt="" className="mx-auto w-72 sm:w-80 md:w-96" />
            <p className="flex animate-bounce items-center justify-center p-2 text-lg font-semibold text-red-600 duration-1000 md:text-xl">
              Your Cart is Empty
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
