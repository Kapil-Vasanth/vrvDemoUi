import React from "react";

function TasksEdit() {
  return (
    <div>
      <div class="space-y-4 mb-4">
        <h1>Task 123455</h1>
        <p>Assigned by: Manager</p>
      </div>
      <div>
        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            1 Aug, 2023
          </h3>
        </div>

        <div class="flex gap-x-3">
          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <img
                class="shrink-0 size-7 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              <svg
                class="shrink-0 size-4 mt-1"
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
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              Created "VRV in React" task
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Find more detailed insctructions here.
            </p>
            <button
              type="button"
              class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <img
                class="shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
              James Collins
            </button>
          </div>
        </div>

        <div class="flex gap-x-3">
          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <span class="flex shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
        </div>

        <div class="flex gap-x-3">
          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <img
                class="shrink-0 size-7 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Marked "Install Charts" completed
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <img
                class="shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
              James Collins
            </button>
          </div>
        </div>

        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            31 Jul, 2023
          </h3>
        </div>

        <div class="flex gap-x-3">
          <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  class="shrink-0 size-4 mt-1"
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
                  <path d="M16 3h5v5"></path>
                  <path d="M8 3H3v5"></path>
                  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
                  <path d="m15 9 6-6"></path>
                </svg>
              </span>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Take a break ⛳️
            </h3>
            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Just chill for now... 😉
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <a
          class="mt-2 py-1 px-2 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="./tasks/1232343"
        >
          Update Task
        </a>

        <a
          class="mt-2 py-1 px-2 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Mark As Complete
        </a>
        <a
          class="mt-2 py-1 px-2 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
          href="./tasks/1232343"
        >
          Delete Task
        </a>
      </div>
    </div>
  );
}

export default TasksEdit;
