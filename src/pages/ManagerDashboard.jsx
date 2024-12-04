import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation, useNavigate } from "react-router";
import { Outlet, useOutlet } from "react-router";
import { decodeJWT } from "../utils";

function ManagerDashboard() {
  const outlet = useOutlet();
  const navigate = useNavigate()

  

  return (
    <div className="h-screen flex flex-col ">
      <Navigation role={"manager"}/>
      {/* below should be an outlet */}
      <div className="max-w-screen-lg m-auto w-full  grow flex justify-center mt-6">
        {outlet ? (
          <Outlet />
        ) : (
          <div class="w-full space-y-2  p-4 min-h-40 dark:text-white">
            <h2 class="truncate text-2xl font-medium tracking-tight">
              Congratulations, your application has users!
            </h2>
            <div class="text-base text-secondary">
              <p>
                Handle Users and Assign Tasks with ease.
                Give Permission to User and Create User
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagerDashboard;
