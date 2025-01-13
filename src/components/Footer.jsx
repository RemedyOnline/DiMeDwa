import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-highlight py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-8 md:gap-8">
          {/* Section 1 - Logo and About */}
          <div className="md:col-span-3">
            <div className="group content-center items-center md:mt-2">
              <Link to="/">
                <span className="content-center bg-theme-color px-2 py-1 text-center text-sm font-bold text-white group-hover:bg-hoverBG md:px-3 md:py-2 md:text-base">
                  Di Me🛒
                </span>
                <span
                  href="#"
                  className="content-center border-2 border-theme-color px-1 py-0.5 text-center text-sm font-bold group-hover:border-hoverBG group-hover:text-hoverBG md:px-2 md:py-1.5 md:text-base"
                >
                  DWA🛍️
                </span>
              </Link>
            </div>
            <p className="mt-2 text-sm italic md:mt-4">
              Your one-stop destination for premium shopping experiences. We
              bring convenience, quality, and reliability to your doorstep.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-nowrap text-lg font-semibold text-hoverBG md:mb-4">
              Quick Links
            </h3>
            <ul className="md:space-y-1">
              <li>
                <Link to="/" className="text-sm hover:underline md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm hover:underline md:text-base"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:underline md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:underline md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-nowrap text-lg font-semibold text-hoverBG md:mb-4">
              Support
            </h3>
            <ul className="md:space-y-1">
              <li>
                <Link
                  to="/faq"
                  className="text-sm hover:underline md:text-base"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-sm hover:underline md:text-base"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/policy"
                  className="text-sm hover:underline md:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm hover:underline md:text-base"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-nowrap text-lg font-semibold text-hoverBG md:mb-4">
              Stay Updated
            </h3>
            <p className="mt-1 text-sm italic md:mt-4">
              Subscribe to our newsletter for exclusive deals and the latest
              updates.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-lg bg-inputBG px-2 py-2 text-theme-color ring-2 ring-inputRing focus:outline-none focus:ring-2 focus:ring-theme-color"
              />
              <button className="rounded-r-lg bg-theme-color px-5 py-2 text-white ring-2 ring-theme-color transition hover:bg-hoverBG hover:ring-hoverBG">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-center border-t border-theme-color border-opacity-40 pt-6 text-sm sm:flex-row sm:justify-between">
          <p>&copy; 2024 Di Me Dwa.</p>
          <p>All rights reserved.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link to="#" className="text-sm hover:underline md:text-base">
              Facebook
            </Link>
            <Link to="#" className="text-sm hover:underline md:text-base">
              Instagram
            </Link>
            <Link to="#" className="text-sm hover:underline md:text-base">
              Twitter
            </Link>
            <Link to="#" className="text-sm hover:underline md:text-base">
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
