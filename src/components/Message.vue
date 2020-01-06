<template>
    <div class="px-2">
    <div class="text-sm text-gray-400 overflow-auto block border-b border-t border-gray-400 rounded shadow bg-white py-2 overflow-y-visible"  v-for="splitz in splitz_details" :key="splitz.id" >        
            <div class="flex ml-1 my-3 py-4 px-3">
                <div class="flex-none">
                    <button class="ml-2 py-3">
                    <img
                        class="h-10 w-10 rounded object-cover"
                        src="https://images.unsplash.com/photo-1485203535145-9eb0f2707965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" alt="Not available">
                    </button>
                </div>

                <div class="ml-5">
                    <div class="flex flex-row  justify-between">                
                        <span class="text-xs text-gray-500 ml-2">26/19/2019</span>
                        <div class="border rounded bg-indigo-700 px-2">
                            <span class="text-xs uppercase text-white"> {{ splitz.topic_id.topic_name }} </span>
                        </div>                
                    </div>
                    <div>
                        <span class="text-gray-900 font-semibold"> {{ splitz.splitted_user.first_name }} {{ splitz.splitted_user.last_name }}</span>
                        <span class="text-gray-700 font-smeibold"> is sharing {{ splitz.splitted_amount }} INR for {{ splitz.topic_id.topic_name }} with you</span>
                    </div>
                    
                    <div>
                        <span class="text-gray-700 font-smeibold">Total Amount: {{ splitz.topic_id.total_amount }} </span>
                    </div>
                    <div class="flex flex-row">
                        <div class="w-16 items-center ml-3 px-3 mt-2 py-1 bg-purple-800 rounded shadow">
                            <button class="text-white uppercase px-2">Pay</button>
                        </div>
                        <div class="w-19 items-center ml-3 px-3 mt-2 py-1 bg-red-500 rounded shadow">
                            <button class="text-white uppercase font-medium">Decline</button>
                        </div>
                    </div>                    
                </div>
            </div>        
    </div>
    </div>
</template>

<script>
import { HTTP } from '../axios-common'

export default ({    
    props:['topic_id'],

    data() {
        return{
            splitz_details:[],            
            error:null
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
            
        },
        declinePay(){
                
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
    }
})
</script>