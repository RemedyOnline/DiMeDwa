import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Sidebar from "../pages/dashboard/Sidebar";

const MainDashboardLayout = () => {
  return (
    <section className="text-nowrap">
      <MainNavbar />
      <div className="flex w-full">
        <div className="w-fit">
          <Sidebar />
        </div>
        <div className="w-full px-4 pb-6 pt-14 md:pt-16 lg:pt-[72px]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default MainDashboardLayout;
