import BusinessOverview from "./BusinessOverview";
import MostPurchased from "./MostPurchased";
import MostViewedProduct from "./MostViewedProduct";
import SalesByCategory from "./SalesByCategory";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <h2>DashboardPage</h2>
      <div className="grid md:grid-cols-8">
        <div className="col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="bg-yellow-200 md:col-span-2 md:grid">
              <BusinessOverview />
            </div>
            <div className="bg-fuchsia-200 md:col-span-4 md:grid">
              <SalesByCategory />
            </div>
          </div>
          <div className="grid grid-cols-1 bg-cyan-200 md:grid-cols-6">
            <div className="col-span-6 md:col-span-3 md:grid">
              <MostViewedProduct />
            </div>
            <div className="col-span-6 bg-neutral-200 md:col-span-3 md:grid">
              <MostPurchased />
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <UserEvent />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
