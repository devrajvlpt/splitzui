<template>

    <div>
      <nav class="mt-8">
        <div>
            <div class="flex justify-between items-center">
              <h2 class="text-md font-semibold text-gray-300 mt-2 tracking-wide" >Topic</h2>
              <button class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-600">
                <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 24 24">
                <path 
                    stroke="currentColor" 
                    stroke-width="2"  
                    stroke-linecap="round"
                    fill-rule="evenodd" 
                    d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z">
                </path>
                </svg>
                </button>
            </div>        
            <div class="mt-1 -mx-3" v-for="topic in topics" :key="topic.id" v-on:click="selected = topic.id" v-bind:class="{'bg-indigo-700 rounded-sm':selected == topic.id}">                
                <router-link v-bind:to="'/topic/' + topic.id + '/' + topic.topic_name">
                    <a href="#"  class="flex justify-between items-center px-1 py-2">
                        <span class="text-sm font-medium leading-tight truncate text-gray-300" >@ {{ topic.topic_name }}</span>
                    </a>
                </router-link>                
            </div>
        </div>  
        
        <div class="py-5">
            <div class="flex justify-between items-center">
                <h2 class="text-md font-semibold text-gray-300 mt-2 tracking-wide ">Splitz</h2>
                <button class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-600">
                <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 24 24">
                <path 
                        stroke="currentColor" 
                        stroke-width="2"  
                        stroke-linecap="round"
                        fill-rule="evenodd" 
                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z">
                </path>
                </svg>
                </button>
            </div>

            <div class="mt-2 -mx-3">
            <a href="#" v-for="topic in topics" :key="topic.id" class="flex justify-between items-center px-2 py-2">
                <span class="text-sm font-medium leading-tight truncate text-gray-300"> @ {{ topic.topic_name }}</span>            
            </a>                 
            </div>
        </div>
        
        
      </nav>
 </div>


</template>

<script>

export default {
    props:['topics'],

    data(){
        return{
            error: null,
            selected: '',
            isActive:false,            
        }
    },

    
}
</script>