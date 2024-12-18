import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation, useNavigate } from "react-router";

import { Outlet, useOutlet } from "react-router";
import { decodeJWT } from "../utils";

function AdminDashboard() {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const location = useLocation();

  // write a useEffect to handle permission

  return (
    <div className="h-screen flex flex-col dark:bg-neutral-800 dark:border-neutral-700 bg-[url('https://preline.co/assets/svg/component/hero-gradient.svg')]">
      <Navigation role={"admin"} />
      {/* below should be an outlet */}
      <div className="max-w-screen-lg m-auto w-full  grow flex justify-center mt-6">
        {outlet ? (
          <Outlet />
        ) : (
          <div class="w-full p-4 min-h-40 dark:text-white">
            <h2 class="truncate text-2xl font-medium tracking-tight mb-2">
              Congratulations, your application has users!
            </h2>
            <div class="text-base text-secondary mb-2">
              <p>
                VRV handles authentication and user management for you. Next,
                learn how to access this data and use it in your application,
                customize the look and feel of your components, and get your VRV
                app ready for production.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div class="p-4 md:p-5">
                  <div class="flex items-center gap-x-2">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Total users
                    </p>
                    <div class="hs-tooltip">
                      <div class="hs-tooltip-toggle">
                        <svg
                          class="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span
                          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                          role="tooltip"
                          
                          data-popper-placement="top"
                        >
                          The number of daily users
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="mt-1 flex items-center gap-x-2">
                    <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      72,540
                    </h3>
                    <span class="flex items-center gap-x-1 text-green-600">
                      <svg
                        class="inline-block size-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                      <span class="inline-block text-sm">1.7%</span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div class="p-4 md:p-5">
                  <div class="flex items-center gap-x-2">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Total Active Managers
                    </p>
                  </div>

                  <div class="mt-1 flex items-center gap-x-2">
                    <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      29.4%
                    </h3>
                  </div>
                </div>
              </div>

              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div class="p-4 md:p-5">
                  <div class="flex items-center gap-x-2">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Tasks Completion
                    </p>
                  </div>

                  <div class="mt-1 flex items-center gap-x-2">
                    <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      56.8%
                    </h3>
                    <span class="flex items-center gap-x-1 text-red-600">
                      <svg
                        class="inline-block size-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                        <polyline points="16 17 22 17 22 11"></polyline>
                      </svg>
                      <span class="inline-block text-sm">1.7%</span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div class="p-4 md:p-5">
                  <div class="flex items-center gap-x-2">
                    <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Tasks Reviews
                    </p>
                  </div>

                  <div class="mt-1 flex items-center gap-x-2">
                    <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      92,913
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
