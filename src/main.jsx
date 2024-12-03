import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from '../src/pages/ErrorPage.jsx'
import { RouterProvider, BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import "../node_modules/preline/dist/preline.js"
import { HSStaticMethods } from "preline";
import Organization from './components/Organization.jsx'
import Users from './components/Users.jsx'
import UsersEdit from './components/UsersEdit.jsx'
import AdminAccount from './components/adminAccount.jsx'
import ManagerDashboard from './pages/ManagerDashboard.jsx'
import UserDashboard from './pages/UserDashboard.jsx'

// TO Make Preline Functions Work
HSStaticMethods.autoInit();

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        HSStaticMethods.autoInit();
    }
});

observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
});


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />

      <Route path="admin" element={<AdminDashboard />} >
        <Route path="account" element={<AdminAccount />} />
        <Route path="organization" element={<Organization />} />
        <Route path="organization/:id" element={<Organization />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UsersEdit />} />
      </Route>
      <Route path="manager" element={<ManagerDashboard />} >
        <Route path="organization" element={<Organization />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UsersEdit />} />
      </Route>
      <Route exact path="user" element={<UserDashboard />} >
        <Route path=":id" element={<UsersEdit />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<App />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
