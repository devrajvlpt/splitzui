<template>    
        
        <div class="border-t  focus:outline-none focus:shadow-outline border-gray-400">
            
            <div class="flex flex-row">
                <button class="ml-2 mt-3 flex  px-4 rounded items-center text-sm font-medium text-gray-600" v-on:click="show()">
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
                <input class="mt-3 py-3 px-4 bg-white  w-full appearance-none leading-tight" placeholder="Splitz">
                <addMember></addMember>
            </div>
            
        </div>    
        
</template>


<script>
import addMember from './AddMember'

export default {    

    data(){
        return{
            error: null,            
            addMember:false
        }
    },
    methods: {
        show() {
            this.$modal.show('add-member',{ draggable: true });
        },
        hide() {
            this.$modal.hide('add-member');
        }
    },
    components:{
        addMember
    }
}
</script>