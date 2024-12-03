import React, { useEffect, useState } from "react";
import { getUserById } from "../api";
import { useParams } from "react-router-dom";

function UsersEdit() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserById(id);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    // update User check for controlled components
    
  }

  return (
    <div class="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-x-3">
        <div class="shrink-0">
          <img class="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&amp;w=2667&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=320&amp;h=320&amp;q=80&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
        </div>

        <div class="grow">
          <h1 class="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Eliana Garcia
          </h1>
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            Graphic Designer, Web designer/developer
          </p>
        </div>
      </div>
      <form class="mt-4" onSubmit={handleSubmit}>
        
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">
            <span>Full name</span>
          </label>
          <input
            type="text"
            id="hs-hero-name-2"
            value={userData.username}
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Full name"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium dark:text-white mb-2">
            <span>Email address</span>
          </label>
          <input
            type="email"
            id="hs-hero-email-2"
            value={userData.email}
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Email address"
          />
        </div>

        <div class="mb-4">
          <label
            for="hs-hero-password-2"
            class="block text-sm font-medium dark:text-white mb-2"
          >
            <span>Password</span>
          </label>
          <input
            type="email"
            name="hs-hero-password-2"
            value={userData.password}
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Password"
          />
        </div>

        <div class="mb-4">
          <label
            for="hs-hero-password-2"
            class="block text-sm font-medium dark:text-white mb-2"
          >
            <span>Role</span>
          </label>
          <select
            name="role"
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          >
            <option value="">Select Role</option>
            <option value="manager">manager</option>
            <option value="user">user</option>
          </select>
        </div>

        <div class="mb-4">
          <label
            for="hs-hero-password-2"
            class="block text-sm font-medium dark:text-white mb-2"
          >
            <span>Organization</span>
          </label>
          <select
            name="role"
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          >
            <option value="">Select Organization</option>
            <option value="manager">org-1</option>
            <option value="user">org-2</option>
          </select>
        </div>

        <div class="flex gap-2 justify-end">
          <button
            type="submit"
            class="py-3 px-4 w-fit inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Update User
          </button>
          <button
            type="button"
            class="py-3 px-4 w-fit inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Delete User
          </button>
        </div>
      </form>
    </div>
  );
}

export default UsersEdit;
