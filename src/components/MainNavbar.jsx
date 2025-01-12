import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = ({ totalAmount, getTotalCartAmount }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-10 flex w-full justify-between border-b border-green-300 bg-highlight px-4 py-2 shadow-lg sm:px-6 lg:px-8 xl:px-10">
      <div className="group content-center items-center">
        <Link to="/">
          <span className="content-center bg-theme-color px-2 py-1 text-center text-sm font-bold text-white group-hover:bg-hoverBG md:px-3 md:py-2 md:text-base lg:text-lg">
            Di Me🛒
          </span>
          <span
            href="#"
            className="content-center border-2 border-theme-color px-1 py-0.5 text-center text-sm font-bold group-hover:border-hoverBG group-hover:text-hoverBG md:px-2 md:py-1.5 md:text-base lg:text-lg"
          >
            DWA🛍️
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-1 md:gap-3">
        <Link
          to="/register"
          className="flex items-center gap-0 text-nowrap rounded-full border-2 border-theme-color px-1 py-1 text-center hover:border-hoverBG hover:text-hoverBG md:gap-1 md:px-2"
        >
          <span className="pl-1 text-xs font-semibold sm:text-sm md:text-base lg:text-lg">
            Start Selling
          </span>
          <User className="h-4 md:h-5" />
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-0 text-nowrap rounded-full border-2 border-theme-color px-1 py-1 text-center hover:border-hoverBG hover:text-hoverBG md:gap-1 md:px-2 md:py-2 lg:px-2.5 lg:py-2.5"
        >
          <div className="relative">
            <ShoppingCart
              name="cart-outline"
              className="my-auto h-4 w-4 align-middle"
            />
            <span
              className={`${
                totalAmount > 0
                  ? ""
                  : "absolute -right-0 -top-0.5 h-1 w-1 rounded-full bg-red-500 md:right-[-4px] md:top-[-3px] md:h-1.5 md:w-1.5"
              }`}
            >
              <span className="absolute -right-0 top-0 h-1 w-1 animate-ping rounded-full bg-red-400 md:h-1.5 md:w-1.5"></span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default MainNavbar;
