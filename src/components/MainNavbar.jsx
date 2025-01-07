import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = ({ totalAmount, getTotalCartAmount }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="fixed top-0 left-0 z-10 flex py-2 w-full justify-between px-4 sm:px-6 lg:px-8 xl:px-10 bg-highlight border-b border-green-300 shadow-lg">
			<div className="content-center items-center">
				<Link to="/">
					<span className="bg-theme-color text-sm md:text-base lg:text-lg px-2 md:px-3 py-1 md:py-2 text-white font-bold content-center text-center">
						Di Me🛒
					</span>
					<span
						href="#"
						className="px-1 md:px-2 py-0.5 md:py-1.5 text-sm md:text-base lg:text-lg text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border-2 text-center font-bold"
					>
						DWA🛍️
					</span>
				</Link>
			</div>
			<div className="flex items-center gap-1 md:gap-3">
				<Link
					to="/register"
					className="text-nowrap flex gap-0 md:gap-1 border-2 border-theme-color rounded-full px-1 md:px-2 py-1 text-center items-center"
				>
					<span className="text-xs sm:text-sm md:text-base lg:text-lg pl-1 font-semibold text-theme-color">
						Start Selling
					</span>
					<User className="text-theme-color h-4 md:h-5" />
				</Link>
				<Link className="relative" to="/cart">
					<div>
						<ShoppingCart
							name="cart-outline"
							className="h-4 md:h-5 text-theme-color my-auto align-middle"
						/>
						<span
							className={`${
								totalAmount > 0
									? "w-1.5 md:w-2 h-1.5 md:h-2 absolute top-0 -right-1 md:top-[-3px] md:right-[-6px] bg-red-500 rounded-full "
									: "w-1.5 md:w-2 h-1.5 md:h-2 absolute -top-1 -right-1 md:top-[-3px] md:right-[-6px] bg-red-500 rounded-full"
							}`}
						>
							<span className="w-1.5 md:w-2 h-1.5 md:h-2 absolute top-0 bg-red-400 rounded-full animate-ping"></span>
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MainNavbar;
