import { Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { apiSignUp } from "../services/auth";
import { PropTypes } from "prop-types";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // preparing form data...
      const formData = new FormData(event.target);

      const avatar = formData.get("avatar");
      const userName = formData.get("userName");
      const email = formData.get("email");
      const password = formData.get("password");
      const phone = formData.get("phone");
      const role = formData.get("role");
      const businessName = formData.get("businessName");

      // payload for the api
      const payload = {
        userName,
        email,
        password,
        phone,
        role: "vendor",
        businessName,
      };

      // calling the registeration API
      const response = await apiSignUp(payload);
      console.log(response.data);

      // toast for successfully registeration..
      toast.success("You've signed up successfully...");

      setTimeout(() => {
        navigate("/login");
      }, 2000); // automatically navigate to login page after 2secs...
    } catch (error) {
      console.log(error);
      toast.error("Registeration failed. Please try again later...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 bg-highlight p-4 shadow-md md:p-6"
      >
        <div className="flex items-start justify-between">
          <div className="w-fit content-center items-center py-1">
            <Link to="/">
              <span className="content-center bg-theme-color px-2 py-1 text-center text-sm font-bold text-white md:px-3 md:py-2 md:text-base lg:text-lg">
                Di Me🛒
              </span>
              <span
                href="#"
                className="content-center border-2 border-theme-color px-1 py-0.5 text-center text-sm font-bold text-theme-color hover:bg-theme-color hover:text-white md:px-2 md:py-1.5 md:text-base lg:text-lg"
              >
                DWA🛍️
              </span>
            </Link>
          </div>
          <div className="w-fit text-right">
            <h3 className="text-lg font-semibold text-theme-color md:text-xl lg:text-2xl">
              Sign Up
            </h3>
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                className="font-semibold text-theme-color underline hover:text-hoverBG"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="avatar" className="text-sm font-medium">
              Profile Picture
            </label>
            <input
              required
              type="file"
              name="avatar"
              id="avatar"
              placeholder="Upload your avatar"
              className="w-full rounded-md bg-inputBG px-3 py-1 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-1.5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="text-sm font-medium">
              User Name
            </label>
            <input
              required
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your User Name"
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">
              Contact
            </label>
            <input
              required
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="role" className="text-sm font-medium">
              Role
            </label>
            <select
              required
              className="w-full rounded-md bg-inputBG px-2 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
              value={selectedOption}
              onChange={handleSelectChange}
              name="role"
              id="role"
            >
              <option value="">--Role--</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="businessName" className="text-sm font-medium">
              Business Name
            </label>
            <input
              required
              type="text"
              name="businessName"
              id="businessName"
              placeholder="Enter Business Name"
              className="w-full rounded-md bg-inputBG px-3 py-1.5 ring ring-inputRing focus:outline-none focus:ring-2 focus:ring-highlightText md:py-2"
            />
          </div>
          <div className="flex gap-2 pt-1 text-sm">
            <input
              required
              type="checkbox"
              name="policy"
              id="policy"
              placeholder="Enter Business Name"
              className="w-4 text-2xl outline-none"
            />
            <label htmlFor="policy">
              You accept the{" "}
              <span className="font-semibold text-theme-color underline">
                privacy policy
              </span>{" "}
              and{" "}
              <span className="font-semibold text-theme-color underline">
                terms of use
              </span>
            </label>
          </div>
        </div>
        <div className="pb-1 pt-3">
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "bg-gray-400" : "bg-theme-color hover:bg-hoverBG"} w-full rounded-lg px-2 py-2.5 text-white ring ring-inputRing transition-colors`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-around">
            <hr className="w-1/4 bg-theme-color" />
            <p className="items-center text-sm">or Sign Up using</p>
            <hr className="w-1/4 bg-theme-color" />
          </div>
          <div className="flex justify-center gap-5">
            <button className="border border-[#0E345A20] px-3 py-3 transition-colors duration-300 ease-in-out hover:border-hoverBG hover:text-hoverBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
              </svg>
            </button>
            <button className="border border-[#0E345A20] px-3 py-3 transition-colors duration-300 ease-in-out hover:border-hoverBG hover:text-hoverBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-apple"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
                <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
              </svg>
            </button>
            <button className="border border-[#0E345A20] px-3 py-3 transition-colors duration-300 ease-in-out hover:border-hoverBG hover:text-hoverBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
              </svg>
            </button>
            <button className="border border-[#0E345A20] px-3 py-3 transition-colors duration-300 ease-in-out hover:border-hoverBG hover:text-hoverBG">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
