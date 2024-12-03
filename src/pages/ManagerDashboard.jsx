import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useLocation, useNavigate } from "react-router";
import { Outlet, useOutlet } from "react-router";
import { decodeJWT } from "../utils";

function ManagerDashboard() {
  const outlet = useOutlet();
  const navigate = useNavigate()
  const location = useLocation();
  const [role,setRole] = useState()
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedData = decodeJWT(token)

    if(decodedData.roles[0].name === "user"){
      navigate("/users")
    }

    if (!token) {
      navigate('/')
    }
  })
  // write a useEffect to handle permission
  

  return (
    <div className="h-screen flex flex-col ">
      <Navigation role={"manager"}/>
      {/* below should be an outlet */}
      <div className="max-w-screen-lg m-auto w-full  grow flex justify-center mt-6">
        {outlet ? (
          <Outlet />
        ) : (
          <div class="w-full space-y-2  p-4 min-h-40">
            <h2 class="truncate text-2xl font-medium tracking-tight">
              Congratulations, your application has users!
            </h2>
            <div class="text-base text-secondary">
              <p>
                VRV handles authentication and user management for you. Next,
                learn how to access this data and use it in your application,
                customize the look and feel of your components, and get your
                VRV app ready for production.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagerDashboard;
