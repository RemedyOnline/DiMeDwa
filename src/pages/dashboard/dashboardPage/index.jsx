import BusinessOverview from "./BusinessOverview";
import MonthlySales from "./MonthlySales";
import MostViewedProduct from "./MostViewedProduct";
import SalesByCategory from "./SalesByCategory";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid md:grid-cols-8">
        <div className="col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="md:col-span-2 md:grid">
              <BusinessOverview />
            </div>
            <div className="md:col-span-4 md:grid">
              {/* <SalesByCategory /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:pr-4">
            <div className="col-span-6 md:col-span-3 md:grid">
              {/* <MostViewedProduct /> */}
            </div>
            <div className="col-span-6 md:col-span-3 md:grid">
              {/* <MonthlySales /> */}
            </div>
          </div>
        </div>
        <div className="pt-4 md:col-span-2 md:pt-0">
          <UserEvent />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
