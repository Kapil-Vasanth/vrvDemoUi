import React from "react";
import { useNavigate } from "react-router-dom";


function Organization() {
  const navigate = useNavigate()

  const orgProfile = () => {
    navigate("./org-name")
  }


  return (
    <div class="-m-1.5 overflow-auto w-full min-h-[30rem]">
      <div class="w-full space-y-2 mb-4 dark:text-white">
        <h2 class="truncate text-2xl font-medium tracking-tight ">
          Organizations
        </h2>
        <p class="truncate text-base text-secondary">
          View and manage organizations
        </p>
      </div>

      <div class="flex mb-2 justify-end">
        <button
          type="button"
          class="py-1 px-3 w-fit items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none self-end"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-slide-down-animation-modal"
          data-hs-overlay="#hs-slide-down-animation-modal"
        >
          Create Organization
        </button>
      </div>

      
      <div class="p-1.5 min-w-full inline-block align-middle border rounded dark:text-white">
        <div class="overflow-hidden">
          <div class="table border-collapse table-auto w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <div class="table-header-group">
              <div class="table-row">
                <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">
                  Organization
                </div>
                <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">
                  desc
                </div>
                <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">
                  ID
                </div>
                <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">
                  Members
                </div>
                <div class="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-100">
                  Created
                </div>
              </div>
            </div>
            <div class="table-row-group divide-y divide-gray-200 bg-white dark:divide-neutral-700 dark:bg-neutral-800">
              <div class="table-row cursor-pointer" onClick={orgProfile}>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Kyda Org
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  test
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  org_asdfasdf
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  1
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                  >
                    Today at 4:46
                  </button>
                </div>
              </div>
              <div class="table-row cursor-pointer" onClick={orgProfile}>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  VRV ORG
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  vrv org
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  org_asdfasdf
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  1
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                  >
                    Today at 4:46
                  </button>
                </div>
              </div>
              <div class="table-row cursor-pointer" onClick={orgProfile}>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  infosys
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  test
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  org_asdfasdf
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                  1
                </div>
                <div class="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                  >
                    Today at 4:46
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating new Organziation */}
      <div
        id="hs-slide-down-animation-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-slide-down-animation-modal-label"
      >
        <div class="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto dark:text-white">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700 dark:text-white">
              <h3
                id="hs-slide-down-animation-modal-label"
                class="font-bold text-gray-800 dark:text-white"
              >
                Create Organization
              </h3>
              <button
                type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="shrink-0 size-4"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto space-y-3">
              <div class="max-w-sm space-y-3">
                <label class="block ">Organization Name</label>
                <input
                  type="text"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="org-name"
                />
              </div>
              <div class="max-w-sm space-y-3">
                <label class="block ">Organization Description</label>
                <input
                  type="text"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Small Description About the Organization"
                />
              </div>
              <div class="max-w-sm space-y-3">
                <label class="block ">Manager - <span className="text-xs">link to a manager</span></label>
                <input
                  type="text"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="org-manager"
                />
              </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                Close
              </button>
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Create Organization
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
