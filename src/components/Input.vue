<template>    
        
            <div class="flex flex-row w-full border-t focus:outline-none focus:shadow-outline border-gray-400">
                <!-- <input class="w-full mt-1 py-1 px-4 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-gray-500" placeholder="Splitz">
                 <div class="flex flex-row mt-4">
                      <router-link to="/payment/listoptions">
                        <button class="block bg-indigo-600 text-xs text-white rounded px-12 mr-2 h-8 py-0 mt-1">
                              Pay
                          </button>
                      </router-link>
                          
                        <button class="block bg-indigo-600 text-xs text-white rounded px-8 h-8 mr-2 py-0 mt-1">
                            Request
                        </button>
                    </div>                 -->
                    <form class="w-full">
                    <div class="flex items-center py-2">
                        <input class="w-full mt-1 py-1 px-4 bg-white rounded overflow-hidden focus:outline-none" placeholder="Splitz">
                        <router-link to="/payment/listoptions">
                            <button class="flex-shrink-0 block bg-indigo-600 text-xs text-white rounded px-12 mr-2 h-8 py-0 mt-1" type="button">
                                Pay 
                            </button>
                        </router-link>
                        <button class="flex-shrink-0 block bg-indigo-600 text-xs text-white rounded px-8 h-8 mr-2 py-0 mt-1" type="button">
                        Decline
                        </button>
                    </div>
                    </form>
            </div>
        
</template>


<script>


export default {    

    data(){
        return{
            error: null,            
            addMember:false
        }
    },
    methods: {       
    },
    components:{        
    }
}
</script>