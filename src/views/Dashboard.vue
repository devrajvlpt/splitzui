<template>
<div> 
  <div class="flex">    
    <div class="flex-1 flex flex-col min-h-screen h-screen">
      <div class="flex text-white h-12">
        <div class="bg-gray-100 w-64 border-r border-gray-400 flex-none flex items-center justify-between px-3 py-2">
          <div class="px-6 text-black font-bold">Splitz</div>          
        <button>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
          </button>
        </div>
        <div class="flex-1 bg-gray-750  flex items-center justify-between border-b border-gray-400">
          <!-- Header -->
        <ChatHeader :topics_header="topics"></ChatHeader>
        
        </div>
      </div>
      <div class="flex-1 flex overflow-y-hidden">
        <div class="bg-gray-100 border-r border-gray-400 w-64 flex-none flex flex-col justify-between">
          <!-- NavBar -->
          <NavBar class="px-8 py-4" :topics="topics"></NavBar>
          
        </div>
        <div class="flex-1 flex justify-between">
          <div class="bg-gray-750 flex-1 flex flex-col justify-between">
            <div class="chat text-sm text-gray-400 overflow-y-auto py-4">                
              <Message :topic_id="this.$route.params.id"></Message>
              
            </div>
            <div class="bg-gray-750 h-24 flex items-center">              
              <div class="w-full">                  
                  <InputMessage :topic_id="this.$route.params.id"></InputMessage>
              </div>
                
              <div class="bg-gray-700 rounded-r flex items-center h-10">                
                  <!-- actions -->
              </div>
            </div>
          </div>

          <div class="mt-4 sidebar-users border-l bg-white w-72 flex-none px-3 py-4 overflow-y-auto">
            <h3 class="tracking-wide text-sm font-semibold text-gray-600 mb-2 font-mono">Topics Members</h3>
            <ul class="mb-6 truncate">
              <li class="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2"> 
                <UserList :topic_id="this.$route.params.id"></UserList>
              </li>
            </ul>        
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>  
</template>

<script>
import {HTTP} from '../axios-common.js'
import ChatHeader from '../components/Header'
import NavBar  from '../components/Navbar'
import Message  from '../components/Message'
import UserList from  '../components/UserList'
import InputMessage from '../components/Input'

export default {
    data(){
        return {
            topics : [],
            createTopic:true
        }        
    },
    components: {
        ChatHeader,
        NavBar,
        Message,
        UserList,
        InputMessage        
    },
    mounted(){
        HTTP.get('v1/api/topic').
        then(response => {
            this.topics = response.data
        })
        .catch(error => {     
            this.error = error       
        })
    }
}
</script>
