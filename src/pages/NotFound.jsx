import { Link } from "react-router-dom";
import pageNotFound2 from "/images/pageNotFound.svg";

const NotFound = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center">
      <img
        src={pageNotFound2}
        alt="notFoundIllustration"
        className="w-2/3 md:w-1/2"
      />
      <Link
        type="submit"
        to={"/"}
        className="mt-4 animate-bounce rounded-full bg-theme-color px-3 py-1 text-sm text-white md:px-4 md:py-2 md:text-base"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;
