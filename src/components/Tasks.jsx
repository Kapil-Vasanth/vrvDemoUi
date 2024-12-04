import React from "react";

function Tasks() {

    const role = localStorage.getItem('role')

  return (
   <div>
    <div class="mb-2">
        {role} Tasks
    </div>
     <div class="grid grid-cols-4 h-fit gap-4">
        
        <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <img
            class="w-full h-auto rounded-t-xl"
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            alt="Card Image"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Task #1
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400">
              task
            </p>
            <a
              class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Add task
            </a>
          </div>
        </div>
        {[1,2,3,4].map(task => (
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
            <p class="mt-1 text-gray-500 dark:text-neutral-400">
              task
            </p>
            <a
              class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Go somewhere
            </a>
          </div>
        </div>
        ))}
      </div>
   </div>
  );
}

export default Tasks;
