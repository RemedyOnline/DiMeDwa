import BusinessOverview from "./BusinessOverview";
import MostViewedProduct from "./MostViewedProduct";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <BusinessOverview />
        <MostViewedProduct />
        <UserEvent />
      </div>
    </section>
  );
};

export default DashboardPage;
