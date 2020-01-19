<template>
    <!-- https://personas.draftbit.com/  avatar generator-->
    <!-- <a href="https://rzp.io/l/jl5L9wS" class="block uppercase bg-orange-700">Pay</a>                             -->                                
    <div class="py-2">        
        <div class="flex items-center relative ml-4">
              <button @click="isUseradd =! isUseradd" class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-600">
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
            <button v-if="isUseradd" @click="isUseradd=false" class="fixed inset-0 h-full w-full bg-white opacity-25 cursor-default"></button>
            <div v-if="isUseradd" class="py-2 h-32 absolute left-0 mt-20  border border-gray-300 shadow-2xl bg-white rounded-lg">
                <div class="block text-gray-800 px-3 py-1 leading-relaxed hover:bg-teal-300 hover:text-gray-800">New Member</div>
                <div class="block text-gray-800 px-3 py-1 leading-relaxed hover:bg-teal-300 hover:text-gray-800">Friends</div>
                <div class="block text-gray-800 px-3 py-1 leading-relaxed hover:bg-teal-300 hover:text-gray-800">Invite</div>
            </div>
            
            
        </div>

    <div class="mt-4 text-sm text-gray-400 overflow-auto block bg-gray-200 py-4 overflow-y-visible"  v-for="splitz in splitz_details" :key="splitz.id" >        
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
                    
                    <!-- <div>
                        <span class="text-gray-700 font-smeibold">Total:</span>
                        <span class="px-1 text-black text-center"> {{ splitz.topic_id.total_amount }}</span>  
                        <span class="text-gray-700 font-smeibold">INR</span>
                    </div> -->
                    <div class="flex flex-row justify-between">
                        <div class="w-16 items-center ml-3 px-3 mt-2 py-1 bg-indigo-500 hover:bg-indigo-800 rounded shadow-xl hidden">
                            <button class="text-white  uppercase px-2 overflow-hidden foucs:appearance-none" v-on:click="makePayment()">Pay</button>
                        </div>
                    </div>                    
                </div>
            </div>
            
    </div>
    <paymentStart></paymentStart>
    </div>
</template>

<script>
import { HTTP } from '../axios-common'
import paymentStart from './PaymentStart'

export default ({    
    props:['topic_id'],
    components:{
        paymentStart
    },
    data() {
        return{
            splitz_details:[],            
            error:null,
            paymentStart:false,
            isUseradd:false,
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

        const handleEscape = (e) =>{
            if (e.key === 'Esc' || e.key === 'Escape'){
                this.isUseradd =  false
            }
        }

        document.addEventListener('keydown', handleEscape);
        
        this.$once('hook:beforeDestroy', () => {
            document.addEventListener('keydown', handleEscape)
        })
    }
})
</script>