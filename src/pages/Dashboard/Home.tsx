import { Building2, Users, BarChart3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Companies",
      value: "12",
      icon: Building2,
      bgGradient: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      action: () => navigate("companies"),
    },
    {
      title: "Total Users",
      value: "48",
      icon: Users,
      bgGradient: "from-green-500 to-green-600",
      bgLight: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      action: () => navigate("users"),
    },
    {
      title: "ML Models",
      value: "5",
      icon: BarChart3,
      bgGradient: "from-purple-500 to-purple-600",
      bgLight: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      action: () => navigate("mlmodels"),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Card with Gradient */}
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 py-10 text-white shadow-xl xl:px-10 xl:py-14">
        <div className="relative z-10">
          <h1 className="mb-3 text-4xl font-bold">Welcome Back! 👋</h1>
          <p className="max-w-2xl text-blue-100">
            Here's a quick overview of your system. Manage your companies, users, and ML models efficiently from your dashboard.
          </p>
        </div>
        {/* Decorative elements */}
      
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
         <button
  key={index}
  onClick={stat.action}
  className={`
    group relative overflow-hidden rounded-2xl border ${stat.borderColor}
    bg-white p-6 shadow-md
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:scale-[1] hover:shadow-2xl
  `}
>
  {/* Soft hover background */}
  <div
    className={`
      pointer-events-none absolute inset-0
      ${stat.bgLight}
      opacity-0 transition-opacity duration-300
      group-hover:opacity-100
    `}
  />

  <div className="relative z-10 flex items-start justify-between">
    <div className="text-left transition-transform duration-300 group-hover:translate-y-[-2px]">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {stat.title}
      </p>

      <p className="mt-3 text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-105">
        {stat.value}
      </p>
    </div>

    <div
      className={`
        rounded-xl bg-gradient-to-br ${stat.bgGradient}
        p-4 shadow-lg
        transition-all duration-300
        group-hover:rotate-6 group-hover:scale-110
      `}
    >
      <Icon size={28} className="text-white" />
    </div>
  </div>

  {/* Animated bottom accent */}
  <div
    className={`
      mt-5 h-1 w-0 rounded-full
      bg-gradient-to-r ${stat.bgGradient}
      transition-all duration-500 ease-out
      group-hover:w-full
    `}
  />
</button>

          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
        <div className="border-b border-gray-100 px-6 py-6 xl:px-10">
          <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
        </div>
        
        <div className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:p-10">
          <button
            onClick={() => navigate("companies/add")}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-5 py-4 text-left transition-all hover:border-blue-300 hover:shadow-lg"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 group-hover:text-blue-600">Add Company</p>
                <p className="mt-1 text-xs text-gray-500">Create new company</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
            </div>
          </button>

          <button
            onClick={() => navigate("users")}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-5 py-4 text-left transition-all hover:border-green-300 hover:shadow-lg"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 group-hover:text-green-600">Manage Users</p>
                <p className="mt-1 text-xs text-gray-500">View all users</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-green-600" />
            </div>
          </button>

          <button
            onClick={() => navigate("mlmodels")}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white px-5 py-4 text-left transition-all hover:border-purple-300 hover:shadow-lg"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 group-hover:text-purple-600">View Models</p>
                <p className="mt-1 text-xs text-gray-500">Check ML models</p>
              </div>
              <ArrowRight size={18} className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-purple-600" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

