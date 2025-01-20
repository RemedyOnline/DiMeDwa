import BusinessOverview from "./BusinessOverview";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <BusinessOverview />
        <UserEvent />
      </div>
    </section>
  );
};

export default DashboardPage;
