import SectionHeading from "./SectionHeading";
import Fashion from "../assets/img/Fashion.jpg";
import Appliances from "../assets/img/Appliances.jpg";
import Electronics from "../assets/img/Electronics.jpg";
import Groceries from "../assets/img/Groceries.jpg";
import Furniture from "../assets/img/homeEssentials.webp";
import Health from "../assets/img/health.png";

const CategoriesSection = () => {
  return (
    <section className="mx-auto my-10 max-w-7xl space-y-2 px-3 sm:px-5 md:space-y-5 md:px-10">
      <SectionHeading heading="Browse Through Our Categories" />
      <div className="grid h-full w-full grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
        <div className="group relative overflow-hidden">
          <img
            src={Fashion}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Fashion
          </p>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src={Appliances}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Appliances
          </p>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src={Electronics}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Electronics
          </p>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src={Groceries}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Groceries
          </p>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src={Furniture}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Furniture
          </p>
        </div>
        <div className="group relative overflow-hidden">
          <img
            src={Health}
            alt=""
            className="relative h-32 w-full bg-cover bg-right bg-no-repeat transition-all duration-500 ease-in-out group-hover:scale-110 md:h-40"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-center text-sm font-semibold text-white md:text-base lg:text-lg">
            Health
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
