import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from '../src/pages/ErrorPage.jsx'
import { RouterProvider, BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import "../node_modules/preline/dist/preline.js"
import { HSStaticMethods } from "preline";
import Organization from './components/Organization.jsx'
import Users from './components/Users.jsx'
import UserProfile from './components/UserProfile.jsx'
import AdminAccount from './components/adminAccount.jsx'

import Tasks from './components/Tasks.jsx';
import ManagerDashboard from './pages/ManagerDashboard.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import TasksEdit from './components/TasksEdit.jsx';
import OrgProfile from './components/OrgProfile.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

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
        <Route path="organization/:id" element={<OrgProfile />} />
        <Route path="organization" element={<Organization />} />
        <Route path="users" element={<Users />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="users/:id" element={<UserProfile />} />
        <Route path="tasks/:id" element={<TasksEdit />} />
      </Route>
      <Route path="manager" element={<ManagerDashboard />} >
      <Route path="account" element={<AdminAccount />} />
        <Route path="organization" element={<Organization />} />
        <Route path="organization/:id" element={<OrgProfile />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserProfile />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/:id" element={<TasksEdit />} />
      </Route>
      <Route exact path="user" element={<UserDashboard />} >
        <Route path=":id" element={<UserProfile />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/:id" element={<TasksEdit />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
