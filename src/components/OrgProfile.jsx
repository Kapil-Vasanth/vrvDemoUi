import React from 'react'

function OrgProfile() {
  return (
    <div class="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
  <div class="border-b border-gray-200 px-4 dark:border-neutral-700">
    <nav class="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
      <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 dark:focus:text-blue-500 active" id="basic-tabs-item-1" aria-selected="true" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
        Organization Details
      </button>
      <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 dark:focus:text-blue-500" id="basic-tabs-item-2" aria-selected="false" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
        Members
      </button>
      
    </nav>
  </div>

  <div class="mt-3 p-4">
    <div id="basic-tabs-1" role="tabpanel" aria-labelledby="basic-tabs-item-1">
    <div class="w-full max-w-2xl mx-auto pt-10 md:pt-8 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-x-3">
        <div class="shrink-0">
          <img class="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1556402514-ab77f15d1ba1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
        </div>

        <div class="grow">
          <h1 class="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Org Name
          </h1>
          <p class="text-sm text-gray-600 dark:text-neutral-400">
            Organziation for handling projects
          </p>
        </div>
      </div>
      <form class="mt-4" >
        
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2 dark:text-white">
            <span>Org Name</span>
          </label>
          <input
            type="text"
            id="hs-hero-name-2"
            value="Eliana"
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
            value="eliana@gmail.com"
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
            value="#$(*99fasdf#"
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
    </div>
    <div id="basic-tabs-2" class="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2">
      <p class="text-gray-500 dark:text-neutral-400 mb-4">
        List of Members
      </p>
      <ul class="max-w-xs flex flex-col">
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
    Admin
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
    Manager
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
    User
  </li>
</ul>
    </div>
    
  </div>
</div>
    
  )
}

export default OrgProfile