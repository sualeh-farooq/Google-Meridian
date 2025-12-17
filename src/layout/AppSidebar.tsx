import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import {
  Building,
  LayoutGrid,
  Users,
} from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const navItems = [
  {
    icon: <LayoutGrid size={22} />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <Building size={22} />,
    name: "Companies",
    path: "/companies",
  },
  {
    icon: <Users size={22} />,
    name: "User Management",
    path: "/users",
  },
    {
    icon: <LayoutGrid size={22} />,
    name: "ML Models",
    path: "/mlmodels",
  },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, toggleMobileSidebar } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full flex flex-col
        bg-slate-900 text-gray-200 border-r border-slate-800
        transition-all duration-300 ease-in-out
        lg:top-5 lg:left-2 lg:rounded-lg lg:h-[calc(100vh-40px)]
        ${isExpanded || isMobileOpen ? "w-[280px] lg:w-[240px]" : "lg:w-[90px] w-0"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div
          className={`h-16 flex items-center px-4 border-b border-slate-800
          ${!isExpanded && !isMobileOpen ? "lg:justify-center" : "justify-between"}`}
        >
          <Link to="/" className={`${!isExpanded && !isMobileOpen ? "lg:hidden" : ""}`}>
            <h1 className="text-lg font-bold tracking-wide text-white">
              Google Meridian
            </h1>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={toggleMobileSidebar}
            className="lg:hidden text-gray-400 hover:text-white p-2"
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Menu Section */}
        <div className="flex-1 overflow-y-auto py-6 no-scrollbar">
          <nav>
            <ul className="flex flex-col gap-2 px-2">
              {navItems.map((nav) => {
                const active = isActive(nav.path);

                return (
                  <li key={nav.name}>
                    <Link
                      to={nav.path}
                      onClick={() => {
                        if (isMobileOpen) {
                          toggleMobileSidebar();
                        }
                      }}
                      className={`group relative flex items-center gap-4 px-4 py-3 rounded-lg
                      transition-all duration-300 ease-in-out
                      ${
                        active
                          ? "bg-blue-900 text-white shadow-md"
                          : "text-gray-300 hover:bg-slate-800 hover:translate-x-1"
                      }`}
                    >
                      {/* Left Active / Hover Bar */}
                      <span
                        className={`absolute left-0 top-0 h-full w-1 rounded-r
                        transition-transform duration-300 origin-top
                        ${
                          active
                            ? "bg-blue-400 scale-y-100"
                            : "bg-blue-500 scale-y-0 group-hover:scale-y-100"
                        }`}
                      />

                      {/* Icon */}
                      <span
                        className={`transition-colors duration-300
                        ${
                          active
                            ? "text-white"
                            : "text-gray-400 group-hover:text-blue-500"
                        }`}
                      >
                        {nav.icon}
                      </span>

                      {/* Text */}
                      {(isExpanded || isMobileOpen) && (
                        <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                          {nav.name}
                        </span>
                      )}

                      {/* Collapsed tooltip for desktop */}
                      {!isExpanded && !isMobileOpen && (
                        <span className="absolute left-full ml-6 px-2 py-1 bg-slate-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap hidden lg:block">
                          {nav.name}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer - Optional User Info */}
        <div className="p-4 border-t border-slate-800">
          {(isExpanded || isMobileOpen) ? (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Admin</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;