<template>
<div class="flex-1 min-w-0 bg-white">
  <div class="border-b-2 border-gray-200">
        <header class="px-6">
          <div class="flex justify-between items-center py-3 border-b border-gray-200">
            <div class="flex-1">
              <div class="relative w-64">
                <span class="absolute inset-y-0 left-0 pl-2 flex items-center">
                    <svg class="h-6  w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="24" height="24"
                      viewBox="0 0 50 50"
                      >
                      <path
                      stroke="currentColor" 
                      stroke-width="2"  
                      stroke-linecap="round"
                      fill-rule="evenodd" 
                      d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
                      </path>
                    </svg>
                </span>                
                <input 
                  class="block w-full max-w-xs rounded-lg border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-600 placeholder-gray-500" 
                  placeholder="Search"
                />
              </div>
            </div>

            <div class="flex items-center">
                <button>
                  <img class="h-8 w-8 text-gray-500" src="https://img.icons8.com/carbon-copy/100/000000/bell.png">
                </button>
                <button class="ml-6">
                  <img
                    class="h-10 w-10 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1485203535145-9eb0f2707965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" alt="Not available">
                </button>
            </div>
          </div>

        </header>
      </div>

</div>
</template>