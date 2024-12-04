import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation, useNavigate } from "react-router";
import { Outlet, useOutlet } from "react-router";

function UserDashboard() {
  const outlet = useOutlet();
  const navigate = useNavigate()
  const location = useLocation();
  
  

  return (
    <div className="h-screen flex flex-col bg-[url('https://preline.co/assets/svg/component/hero-gradient.svg')]">
      <Navigation role={"user"}/>
      {/* below should be an outlet */}
      <div className="max-w-screen-lg m-auto w-full  grow flex justify-center mt-6">
        {outlet ? (
          <Outlet />
        ) : (
          <div class="w-full space-y-2  p-4 min-h-40 dark:text-white">
            <h2 class="truncate text-2xl font-medium tracking-tight">
              Hi User 
            </h2>
            <div class="text-base text-secondary">
              <p>
              List all task and manage seamless Ensure you have organization linked 
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
