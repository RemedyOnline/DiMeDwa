import BusinessOverview from "./BusinessOverview";
import SalesByCategory from "./SalesByCategory";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <BusinessOverview />
        <SalesByCategory />
        <UserEvent />
      </div>
    </section>
  );
};

export default DashboardPage;
