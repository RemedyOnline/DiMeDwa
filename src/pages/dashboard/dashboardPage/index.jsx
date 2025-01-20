import BusinessOverview from "./BusinessOverview";
import UserEvent from "./UserEvent";

const DashboardPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <BusinessOverview />
        <UserEvent />
      </div>
    </section>
  );
};

export default DashboardPage;
