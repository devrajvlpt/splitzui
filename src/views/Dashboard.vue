<template>
<div> 
  <div class="flex">    
    <div class="flex-1 flex flex-col min-h-screen h-screen">
      <div class="flex text-white h-12">
        <div class="bg-gray-200 w-64 border-r border-gray-400 flex-none flex items-center justify-between px-3 py-2">
          <div class="px-6 text-black font-bold">Splitz</div>          
        <button>
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
          </button>
        </div>
        <div class="flex-1 bg-gray-50 flex items-center justify-between border-b border-gray-400">
          <!-- Header -->
        <ChatHeader :topic_id="this.$route.params.id" :route_name="this.$route.path" v-on:showUsers="updateShowUser($event)"></ChatHeader>
        
        </div>
      </div>
      <div class="flex-1 flex overflow-y-hidden">
        <div class="bg-gray-200 border-r border-gray-400 w-64 flex-none flex flex-col justify-between overflow-auto overflow-y-visible">
          <!-- NavBar -->
          <NavBar class="px-8 py-4" :topics="topics"></NavBar>
          
        </div>
        <div class="flex-1 flex justify-between">
          <div class="bg-gray-750 flex-1 flex flex-col justify-between">
            <div class="chat text-sm text-gray-400 overflow-y-auto py-4">
              <!-- TODO use route view for the same once working  -->
              <router-view>
                <Message :topic_id="this.$route.params.id"></Message>              
                <PaymentStart ></PaymentStart>
              </router-view>
              
            </div>                                      
            <div class="bg-gray-750 h-20 flex mb-2">
              <div class="flex flex-row w-full justify-between">                  
                  <!-- <InputMessage :topic_id="this.$route.params.id">                    -->
                  <!-- </InputMessage> -->
                  
              </div>
                
              <div class="bg-gray-700 rounded-r flex items-center h-10">                
                  <!-- actions -->
              </div>
            </div>
          </div>

          <div v-if="showUserList" class="mt-5 sidebar-users border-l bg-white w-72 flex-none px-3 py-4 overflow-y-auto">
            <div class="flex flex-row">
              <h3 class="tracking-wide text-sm font-semibold text-gray-600 mb-2 leading-tight">Topics Members</h3>
            <span>
                <button @click="showUserList=false" class="overflow-hidden focus:outline-none focus:border-indigo-500">
                <svg class="h-5 w-5 -mt-1 ml-28 text-gray-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 172 172"
                    >
                    <g fill="none" 
                    fill-rule="nonzero" 
                    stroke="currentColor" 
                    stroke-width="1" 
                    stroke-linecap="butt" 
                    stroke-linejoin="miter" 
                    stroke-miterlimit="10" 
                    stroke-dasharray="" stroke-dashoffset="0" 
                    font-family="none" font-weight="none" font-size="none" 
                    text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="#ffffff"></path><g fill="currentColor"><path d="M45.74349,34.28802c-4.66401,0.00578 -8.85992,2.83567 -10.61285,7.15775c-1.75292,4.32207 -0.71362,9.27524 2.62873,12.52819l32.02604,32.02604l-32.02604,32.02604c-2.99552,2.87604 -4.20218,7.14678 -3.15461,11.16516c1.04756,4.01838 4.18566,7.15647 8.20404,8.20403c4.01838,1.04756 8.28912,-0.1591 11.16516,-3.15462l32.02604,-32.02604l32.02604,32.02604c2.87603,2.99556 7.14679,4.20225 11.1652,3.1547c4.0184,-1.04756 7.15652,-4.18567 8.20408,-8.20408c1.04756,-4.0184 -0.15913,-8.28917 -3.1547,-11.1652l-32.02604,-32.02604l32.02604,-32.02604c3.39139,-3.29657 4.4111,-8.33702 2.56778,-12.6926c-1.84331,-4.35558 -6.17151,-7.13275 -10.89903,-6.99334c-2.97902,0.08876 -5.80647,1.33381 -7.88333,3.47135l-32.02604,32.02604l-32.02604,-32.02604c-2.16155,-2.22196 -5.13056,-3.4742 -8.23047,-3.47135z"></path></g><path d="" fill="none"></path></g></svg>
                    </button>
            </span>
            </div>
            

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
// import {HTTP} from '../axios-common.js'
import ChatHeader from '../components/Header'
import NavBar  from '../components/Navbar'
import Message  from '../components/Message'
import UserList from  '../components/UserList'
// import InputMessage from '../components/Input'
import PaymentStart from '../components/PaymentStart'
import { mapState } from 'vuex'

export default {
    data(){
        return {            
            createTopic:true,
            showUserList:true,
            showPayment:false,
            showMessage:true,
            
        }        
    },
    components: {
        ChatHeader,
        NavBar,
        Message,
        UserList,
        // InputMessage,
        PaymentStart
    },
    methods: {
      
      updateShowUser:function(value){        
        this.showUserList = value
      },

      swapMain:function(){
        this.showPayment = true,
        this.showMessage = false
      }
      
    },
    mounted(){
        this.$store.dispatch('loadTopics')
    },
    computed: mapState([
      'topics'
    ])
}
</script>
