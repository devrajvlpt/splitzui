<template>

    <div>
      <nav class="mt-8">
        <div>
            <div class="flex justify-between items-center">
              <h2 class="text-md font-semibold text-gray-600 font-black mt-2 tracking-wide" >Topic</h2>
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
            <div class="mt-1" v-for="topic in topics" :key="topic.id" v-on:click="selected = topic.id" v-bind:class="{'bg-gray-600 rounded-sm focus:text-white -ml-8 w-64 px-8':selected == topic.id}">
                <router-link v-bind:to="'/topic/' + topic.id + '/' + topic.topic_name">
                    <a href="#"  class="flex justify-between items-center px-0 py-1">
                        <span class="text-medium leading-tight truncate text-gray-800" >{{ topic.topic_name }}</span>
                        <!-- <div class="border rounded bg-green-500 px-1"> -->
                            <!-- <span class="text-xs text-white"> Admin </span> -->
                        <!-- </div> -->
                    </a>
                </router-link>                
            </div>


            <div class="xl:mt-64 lg:mt-40 flex justify-between items-center">
                <h2 class="text-md font-semibold text-gray-600 font-black mt-2 tracking-wide" >Split Directly</h2>
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

            <div class="mt-1" v-for="user in friends" :key="user.id" v-on:click="selected = user.id" v-bind:class="{'bg-gray-600 rounded-sm focus:text-white -ml-8 w-64 px-8':selected == user.id}">                
                <router-link v-bind:to="'/user/' + user.id + '/' + user.first_name">
                    <a href="#"  class="flex justify-between items-center px-0 py-1">
                        <span class="text-medium leading-tight truncate text-gray-800" >{{ user.last_name }} {{ user.first_name }}</span>
                    </a>    
                </router-link>            
            </div>
        </div>  
        <createTopic></createTopic>        
      </nav>
 </div>


</template>

<script>
import createTopic from './CreateTopic'
import { HTTP } from '../axios-common.js'

export default {
    props:['topics'],

    data(){
        return{
            error: null,
            selected: '',
            friends:[],
            isActive:false,
            createTopic:false           
        }
    },
    
    created() {            
        let user_id = localStorage.getItem('user')
        HTTP.get('v1/api/listfriend/' + user_id,
        {
            handlerEnabled:true
        }).
        then(response => {
           this.friends = response.data[0].users
           this.selected = this.friends[0].id           
        }).
        catch(error =>{
            this.error = error
        })

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