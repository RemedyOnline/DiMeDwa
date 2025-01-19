import { ChartCandlestickIcon, Eye, Truck, User } from "lucide-react";
import cashIcon from "../../../assets/img/cash.svg";

const BusinessOverview = () => {
  return (
    <section className="bg-white p-2">
      <h2 className="pt-2 text-center text-xl font-black md:text-2xl">
        Your Statistics
      </h2>
      <div className="space-y-2 p-2">
        {/* Card */}
        {/* flex items-start justify-end gap-1 rounded-lg bg-inputBG p-1 md:gap-3 */}
        <div className="bg-bgColor md:pl flex items-start gap-1 rounded-lg p-2 md:gap-2 lg:pl-10 2xl:pl-24">
          <div className="pt-1.5">
            <User size={20} />
          </div>
          <div className="">
            <h3 className="text-base lg:text-lg">
              <span className="text-xl font-semibold">7.6</span>
              /10
            </h3>
            <p className="text-sm md:text-xs lg:text-sm">
              Customer Satisfaction
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-bgColor md:pl flex items-start gap-1 rounded-lg p-2 md:gap-2 lg:pl-10 2xl:pl-24">
          <div className="pt-1.5">
            <ChartCandlestickIcon size={20} />
          </div>
          <div>
            <h3 className="text-base lg:text-lg">
              <span className="text-xl font-semibold">250</span>
              /clicks
            </h3>
            <p className="text-sm md:text-xs lg:text-sm">on your recent post</p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-bgColor md:pl flex items-start gap-1 rounded-lg p-2 md:gap-2 lg:pl-10 2xl:pl-24">
          <div className="pt-1.5">
            <Eye size={20} />
          </div>
          <div>
            <h3 className="text-base lg:text-lg">
              <span className="text-xl font-semibold">450</span>
              /views
            </h3>
            <p className="text-sm md:text-xs lg:text-sm">
              on your latest listing
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-bgColor md:pl flex items-start gap-1 rounded-lg p-2 md:gap-2 lg:pl-10 2xl:pl-24">
          <div className="pt-1.5">
            <img src={cashIcon} alt="cash-icon" className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base lg:text-lg">
              <span className="text-xl font-semibold">₵1,200</span>
            </h3>
            <p className="text-sm md:text-xs lg:text-sm">
              total sales this month
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="bg-bgColor md:pl flex items-start gap-1 rounded-lg p-2 md:gap-2 lg:pl-10 2xl:pl-24">
          <div className="pt-1.5">
            <Truck size={20} />
          </div>
          <div>
            <h3 className="text-base lg:text-lg">
              <span className="text-xl font-semibold">95</span>%
            </h3>
            <p className="text-sm md:text-xs lg:text-sm">successful orders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
