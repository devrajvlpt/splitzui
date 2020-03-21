<template>
    <!-- https://personas.draftbit.com/  avatar generator-->
    <!-- <a href="https://rzp.io/l/jl5L9wS" class="block uppercase bg-orange-700">Pay</a>                             -->                                
    <div class="py-2">
        <div class="flex items-center relative ml-4">
            <button  class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-400 overflow-hidden focus:outline-none">
            <div class="">
                <svg class="h-4 w-4  mt-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
                <div class="px-6 -mt-5 text-sm font-normal text-gray-600 tracking-wide">Add Subtopic</div>
            </div>
            </button>
            
        </div>
        
    <div class="xl:mt-0 lg:mt-0">
      <AddMember></AddMember>
        <div class="bg-white rounded-lg shadow-lg block ml-10 w-1/5  h-64 mt-10 overflow-y-visible">
        <div class="text-sm text-gray-400"  v-for="splitz in splitz_details" :key="splitz.id" >                    
            <div class="flex">            
                <div v-if="splitz.admin==true" class="px-2 ml-2 mt-3">
                     <table>
                        <tbody class="bg-white">
                            <tr class="border-b border-gray-200">
                                <td>
                                    <div class="flex-none">
                                    <button class="ml-2 py-3">
                                    <img
                                        class="h-6 w-6 rounded-full object-cover"
                                        src="../assets/images/he.png" alt="Not available">
                                    </button>
                                    </div>
                                </td>
                                <td class="px-4 py-2 whitespace-no-wrap">
                                    <div class="flex items-center">
                                        <div class="flex flex-row">
                                            <span v-if="splitz.splitted_user.first_name" class="text-sm leading-tight font-medium text-gray-600"> {{ splitz.splitted_user.last_name }} {{ splitz.splitted_user.first_name }}</span>
                                            <span v-else class="text-sm leading-tight font-medium text-gray-600"> {{ splitz.splitted_user.user_name }}</span>
                                                <!-- <span class="text-xs text-gray-600 px-4 mt-1">6:34 PM</span> -->
                                        </div>
                                    </div>
                                </td>
                                <td class="py-2 whitespace-no-wrap border-b border-gray-200">
                                    <div>
                                        <span class="text-black text-center px-1"> {{ splitz.splitted_amount }}</span>  
                                    </div>                                        
                                </td>
                                <td class="px-4 whitespace-no-wrap border-b border-gray-200">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Spent
                                    </span>
                                </td>                        
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="flex flex-row justify-between">
                        <div class="w-16 items-center ml-3 px-3 mt-2 py-1 bg-indigo-500 hover:bg-indigo-800 rounded shadow-xl hidden">
                            <button class="text-white  uppercase px-2 overflow-hidden foucs:appearance-none" v-on:click="makePayment()">Pay</button>
                        </div>
                    </div>                    
                </div>

                <div class="ml-5 py-1" v-if="splitz.admin==false">
                    <div class="flex flex-row">
                        <span v-if="splitz.splitted_user.first_name" class="text-gray-900 font-semibold"> {{ splitz.splitted_user.user_name }}</span>
                        <span v-else class="text-gray-900 font-semibold"> {{ splitz.splitted_user.user_name }}</span>
                            <span class="text-xs text-gray-600 px-4 mt-1">6:34 PM</span>
                    </div>
                    <div>
                        
                        <span class="text-gray-700 font-smeibold">Owes:</span>
                        <span v-if="splitz.splitted_user.first_name" class="text-gray-900 font-semibold"> {{ splitz.splitted_user.last_name }} {{ splitz.splitted_user.first_name }}</span>
                        <span class="text-black text-center px-1"> {{ splitz.splitted_amount }}</span>  
                        <span class="text-gray-700 font-smeibold">INR</span>
                    </div>

                    <div class="mt-2">
                        <span class="px-2 py-1 leading-tight inline-flex items-center bg-indigo-200 rounded">
                        <svg class="h-2 w-2 text-indigo-600" viewBox="0 0 8 8" fill="currentColor">
                          <circle cx="4" cy="4" r="3"></circle>
                        </svg>
                        <span class="ml-2 text-sm text-indigo-600 font-medium">Not Paid</span>
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
    </div>
</template>

<script>
import { HTTP } from '../axios-common'
import AddMember  from '../components/AddMember.vue'

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
        hideTopic(){
           this.$modal.hide('create-topic')
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