<template>
    <!-- https://personas.draftbit.com/  avatar generator-->
    <!-- <a href="https://rzp.io/l/jl5L9wS" class="block uppercase bg-orange-700">Pay</a>                             -->                                
    <div class="py-2">
        <div class="flex items-center relative ml-4">
              <button v-on:click="show()" class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-600">
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
                <div class="px-2 text-sm font-normal text-gray-600 font-black tracking-wide">Add member</div>                                
            </button>            
            <AddMember></AddMember>
        </div>
    <div class="xl:mt-78 lg:top-0">
        
        <div class="text-sm text-gray-400 overflow-auto border-t border-gray-300 py-4 overflow-y-visible"  v-for="splitz in splitz_details" :key="splitz.id" >                    
            <div class="flex ml-1 my-3 py-4 px-3">
                <div class="flex-none">
                    <button class="ml-2 py-3">
                    <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="../assets/images/he.png" alt="Not available">
                    </button>
                </div>

                <div class="ml-5 py-3">
                    <div class="flex flex-row">
                        <span class="text-gray-900 font-semibold"> {{ splitz.splitted_user.last_name }} {{ splitz.splitted_user.first_name }}</span>
                            <span class="text-xs text-gray-600 px-6 mt-0">6:34 PM</span>
                    </div>
                    <div>
                        
                        <span class="text-gray-700 font-smeibold">Sharing:</span>
                        <span class="text-black text-center px-1"> {{ splitz.splitted_amount }}</span>  
                        <span class="text-gray-700 font-smeibold">INR</span>
                    </div>

                    <div class="mt-2">
                        <span class="px-2 py-1 leading-tight inline-flex items-center bg-red-200 rounded">
                        <svg class="h-2 w-2 text-red-500" viewBox="0 0 8 8" fill="currentColor">
                          <circle cx="4" cy="4" r="3"></circle>
                        </svg>
                        <span class="ml-2 text-sm text-red-500 font-medium">Not Paid</span>
                      </span>
                    </div>
                     
                    
                    <div class="flex flex-row justify-between">
                        <div class="w-16 items-center ml-3 px-3 mt-2 py-1 bg-indigo-500 hover:bg-indigo-800 rounded shadow-xl hidden">
                            <button class="text-white  uppercase px-2 overflow-hidden foucs:appearance-none" v-on:click="makePayment()">Pay</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>        
    </div>
</template>

<script>
import { HTTP } from '../axios-common'
import AddMember from './AddMember'

export default ({    
    props:['topic_id'],
    
    data() {
        return{
            splitz_details:[],            
            error:null,            
        }
    },    
    methods:{
        init(){
            var topic_id = this.$route.params.id
            HTTP.get('v1/api/splitz/' + topic_id).
                then(response => {
                this.splitz_details = response.data       
                }).
                catch(error =>{
                    this.error = error
                })
        },
        // Make Payment via RazorPay
        makePayment(){
            this.$modal.show('payment-start')
        },
        declinePay(){
                
        },

        show() {
            this.$modal.show('add-member',{ draggable: true });
        },
        hide() {
            this.$modal.hide('add-member');
        }
    },
    
    watch: {
        '$route'(){
            this.init()
        }
    },
    created(){

        HTTP.get('v1/api/splitz/' + this.topic_id).
        then(response => {
           this.splitz_details = response.data       
        }).
        catch(error =>{
            this.error = error
        })        
    },
    components:{
        AddMember
    }
})
</script>