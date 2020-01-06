<template>
<div> 
  <div class="flex">    
    <div class="flex-1 flex flex-col min-h-screen h-screen">
      <div class="flex text-white h-12">
        <div class="bg-gray-800 w-64 flex-none flex items-center justify-between border-b border-gray-900 px-3 py-2">
          <div class="px-6">Splitz</div>
          <button>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
          </button>
        </div>
        <div class="flex-1 bg-gray-750 flex items-center justify-between border-b border-gray-900">
          <!-- Header -->
        <ChatHeader></ChatHeader>
        </div>
      </div>
      <div class="flex-1 flex overflow-y-hidden">
        <div class="bg-gray-800 w-64 flex-none flex flex-col justify-between">
          <!-- NavBar -->
          <NavBar class="px-8 py-4" :topics="topics"></NavBar>
          <div class="bg-gray-850 px-3 py-2 flex items-center justify-between">
            <div class="flex items-center">              
              <div class="text-xs ml-2">
                <div class="text-white">drehimself</div>
                <div class="text-gray-500 text-xxs">#9589</div>
              </div>
            </div>
            <div class="flex items-center text-gray-500">
              <a href="#" class="hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
              </a>
              <a href="#" class="ml-3 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" opacity=".1" fill="none"></path><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path></svg>
              </a>
              <a href="#" class="ml-3 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-between">
          <div class="bg-gray-750 flex-1 flex flex-col justify-between">
            <div class="chat text-sm text-gray-400 overflow-y-auto py-4">                
              <Message :topic_id="this.$route.params.id"></Message>
            </div>
            <div class="bg-gray-750 h-24 flex items-center mx-3">              
              <div class="w-full">                  
                  <InputMessage :topic_id="this.$route.params.id"></InputMessage>
              </div>
                
              <div class="bg-gray-700 rounded-r flex items-center h-10">                
                  <!-- actions -->
              </div>
            </div>
          </div>

          <div class="mt-3 sidebar-users text-sm bg-gray-100 w-56 flex-none px-3 py-4 rounded shadow-lg overflow-y-auto">
            <h3 class="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Topics Members</h3>
            <ul class="mb-6 truncate">
              <li class="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                <UserList></UserList>
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
