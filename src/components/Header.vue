<template>
<div class="flex-1 min-w-0 bg-white">
  <div class="border-b border-gray-400">
        <header class="px-6">
          <div class="flex justify-between items-center py-3 border-b border-gray-200">
            <div class="flex-1 mt-3">
              <div class="text-gray-700 text-md font-bold">{{this.topic.topic_name}}</div>
              <div class="flex flex-row">                
                <div class="text-gray-500 font-bold text-sm cursor-pointer">{{ this.splitz}} |</div>
                <!-- TODO Fix the description for TOPIC -->
                <div class="text-gray-500 font-bold text-sm cursor-pointer px-2">Sharing netflix amount with cousins</div>
              </div>
              
            </div>

            <div class="flex items-center mt-2">
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
                      v-on:click="show()"
                    />
                </div>
                <button>
                  <img class="mt-2 h-8 w-8 text-gray-500" src="https://img.icons8.com/carbon-copy/100/000000/bell.png">
                </button>

              <div class="relative mt-2">  
                              
                  <button @click="isOpen =! isOpen" class="relative z-10 h-10 w-10 rounded-full object-cover overflow-hidden border-2 border-gray-500 focus:outline-none focus:border-indigo-500">
                      <img src="../assets/images/she.png" alt="Not available">
                  </button>
                  <button v-if="isOpen" @click="isOpen=false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
                <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 shadow-xl bg-white rounded-lg">
                      <a href="#" class="block text-gray-800 px-4 py-2 hover:bg-indigo-600 hover:text-white focus:rounded">Account Settings</a>
                      <a href="#" class="block text-gray-800 px-4 py-2 hover:bg-indigo-600 hover:text-white focus:rounded">Support</a>
                      <div v-on:click="signout()" class="block text-gray-800 px-4 py-2 hover:bg-indigo-600 hover:text-white focus:rounded">Sign Out</div>
                  </div>  

              </div>

              
                
                

            </div>
          </div>
        </header>        
      </div>    
</div>
</template>

<script>
// import AccountDropdown from '../components/AccountDropdown'
import { mapState } from 'vuex'

export default {
  
  props:['topic_id'],
  components:{
    // AccountDropdown
  },
  created() {
    const handleEscape = (e) =>{
      if (e.key === 'Esc' || e.key === 'Escape'){
        this.isOpen = false
      }

    }

    document.addEventListener('keydown', handleEscape)
    this.$once('hook:beforeDestroy', () => {
      document.addEventListener('keydown', handleEscape)
    })

  },
  data(){
    return{
      topicHeader:{},
      isOpen: false      
    }
  },
  methods:{
    signout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (localStorage.getItem('token') == undefined){
          this.$router.replace({name:"Login"});
        }
    },
    init(){                  
      this.$store.dispatch('loadTopicById', this.topic_id)
      this.$store.dispatch('loadSplitz', this.topic_id)
    }
  },
  watch: {
    $route(){
      this.init()
    }
  },  
  computed: mapState([
    'topic',
    'splitz'
  ])
  
}
</script>
