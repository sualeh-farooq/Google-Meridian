import React from "react";
import { Link } from "react-router";
import GridShape from "../components/common/GridShape";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-slate-900 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <span className="font-semibold text-white text-2xl">Google Meridian</span>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

