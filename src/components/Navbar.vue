<template>

    <div>
      <nav class="mt-8">
        <div>
            <div class="flex justify-between items-center">
              <h2 class="text-md font-semibold text-gray-300 mt-2 tracking-wide" >Topic</h2>
              <button class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-600" v-on:click="show()">
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
            <div class="mt-1" v-for="topic in topics" :key="topic.id" v-on:click="selected = topic.id" v-bind:class="{'bg-indigo-700 rounded-sm w-56':selected == topic.id}">
                <router-link v-bind:to="'/topic/' + topic.id + '/' + topic.topic_name">
                    <a href="#"  class="flex justify-between items-center px-0 py-1">
                        <span class="text-sm leading-tight truncate text-gray-300" >@ {{ topic.topic_name }}</span>
                    </a>
                </router-link>                
            </div>
        </div>  
        <createTopic class="h-screen w-full"></createTopic>
        
        
      </nav>
 </div>


</template>

<script>
import createTopic from './CreateTopic'

export default {
    props:['topics'],

    data(){
        return{
            error: null,
            selected: '',
            isActive:false,
            createTopic:false           
        }
    },
    methods: {
        show() {
            this.$modal.show('create-topic',{ draggable: true });
        },
        hide() {
            this.$modal.hide('create-topic');
        }
    },
    components:{
        createTopic
    }
}
</script>