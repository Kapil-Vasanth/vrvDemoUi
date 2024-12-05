import React from "react";

function Tasks() {
  const role = localStorage.getItem("role");

  return (
    <div>
      <div class="mb-2">
        <h1 class="text-xl capitalize font-semibold">{role} Tasks</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit gap-4">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hover:bg-gray-200 cursor-pointer divide-y-2">
          <div class="h-[120px] flex justify-center items-center grow">
            <svg
              class="shrink-0 size-11"
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
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </div>
          <div class="p-4 md:p-5">
            <a href="./tasks/newTask"><h3 class="text-lg font-bold text-gray-800 dark:text-white text-center">
              Create New Task
            </h3></a>
          </div>
        </div>
        {[1, 2, 3, 4, 5].map((task) => (
          <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
              class="w-full h-auto rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Task #{task}
              </h3>
              <p class="mt-1 text-gray-500 dark:text-neutral-400">task</p>
              <d className="flex gap-2">
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
              </d>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
