import { useState } from "react";
import navItems from "../../constants/navItems";
import {
  LayoutDashboard,
  LogOut,
  PackagePlus,
  PanelLeftClose,
  PanelRight,
  PanelRightClose,
  Settings,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const ICON_MAP = {
  LayoutDashboard,
  Store,
  PackagePlus,
  Settings,
  LogOut,
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
    console.log(collapsed);
  };

  const getIcon = (iconName) => {
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? (
      <IconComponent size={18} />
    ) : (
      <LayoutDashboard size={18} />
    );
  };

  return (
    <section
      className={`${collapsed ? "w-12" : "sm:min-w-40 md:min-w-48"} sticky left-0 top-0 text-nowrap text-theme-color transition-all duration-500 ease-in`}
    >
      <div className="flex min-h-screen flex-col items-start justify-between bg-highlight pt-11 sm:pt-12 md:pt-14">
        <div className="flex w-full flex-col">
          {navItems.map((navItem) => (
            <Link
              key={navItem.id}
              to={navItem.path}
              onClick={() => setActiveTab(navItem.id)}
              className={`group flex h-14 w-full items-center gap-2 py-4 text-sm font-medium hover:bg-hoverBG md:text-base lg:text-lg ${collapsed ? "px-4" : "px-6 sm:px-8 md:px-10"} ${
                activeTab === navItem.id
                  ? "bg-theme-color text-white"
                  : "hover:text-white"
              }`}
            >
              <span>{getIcon(navItem.icon)}</span>
              <span
                className={` ${collapsed ? "ml-3 hidden rounded-full bg-hoverBG px-2 py-1 text-white group-hover:block" : ""}`}
              >
                {navItem.name.charAt(0).toUpperCase() + navItem.name.slice(1)}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col">
          {!collapsed ? (
            <div className="mx-auto w-full space-y-1 border-y border-hoverBG px-5 py-5 text-gray-500 sm:space-y-2 md:space-y-3">
              <div className="flex gap-1 font-medium hover:cursor-pointer hover:text-theme-color md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-world"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <span className="text-xs md:text-sm lg:text-base">
                  @dimedwagh.com
                </span>
              </div>
              <div className="flex gap-1 font-medium hover:cursor-pointer hover:text-theme-color md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <span className="text-xs md:text-sm lg:text-base">
                  @DiMeDwaGh
                </span>
              </div>
              <div className="flex gap-1 font-medium hover:cursor-pointer hover:text-theme-color md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
                <span className="text-xs md:text-sm lg:text-base">
                  @DiMeDwaGh
                </span>
              </div>
              <div className="flex gap-1 font-medium hover:cursor-pointer hover:text-theme-color md:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
                <span className="text-xs md:text-sm lg:text-base">
                  @DiMeDwaGh
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          <button
            onClick={toggleSidebar}
            className="group px-6 py-3 hover:bg-theme-color"
          >
            <span
              className={`flex w-full items-center justify-center gap-2 rounded-full ${collapsed ? "" : "border-2 border-theme-color p-1 group-hover:border-white"}`}
            >
              <span className="group-hover:text-white">
                {collapsed ? <PanelRightClose /> : <PanelLeftClose />}
              </span>
              <span
                className={`font-mono text-sm font-semibold group-hover:text-white md:text-base lg:text-lg ${collapsed ? "hidden" : ""}`}
              >
                {collapsed ? "" : "Collapse"}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
