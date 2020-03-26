<template>
    <!-- https://personas.draftbit.com/  avatar generator-->
    <!-- <a href="https://rzp.io/l/jl5L9wS" class="block uppercase bg-orange-700">Pay</a>                             -->                                
    <div class="py-2">
        <div class="flex items-center relative ml-4">
            <button v-on:click=addSubtopic()  class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-400 overflow-hidden focus:outline-none">
            <div class="">
                <svg class="h-4 w-4  mt-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 24 24">
                    <path 
                    stroke="currentColor" 
                    stroke-width="1"  
                    stroke-linecap="round"
                    fill-rule="evenodd" 
                    d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z">
                    </path>
                </svg>
                <div class="px-6 -mt-5 text-sm font-normal text-gray-600 tracking-wide">Add Subtopic</div>
            </div>
            </button>            
        </div>
    <div>
      
        <div class="bg-white">
            <div class="text-sm text-gray-400">
                <div class="flex">
                    
                    <div class="px-2 ml-2 mt-3">                        
                        <div v-for="sub in sub_topic" :key="sub.id">
                            {{
                                sub.sub_topicname
                            }}
                        </div>
                        <table>
                            <tbody class="bg-white">
                                <tr class="border-b border-gray-200" v-for="splitz in splitz_details" :key="splitz.id" >
                                    <td class="-ml-12">
                                        <button class="ml-1 py-1">
                                        <img
                                            class="h-6 w-6 rounded-full object-cover"
                                            src="../assets/images/he.png" alt="Not available">
                                        </button>                                    
                                    </td>
                                    <td class="px-1 py-2 mr-20 whitespace-no-wrap">
                                        <div class="flex items-center">
                                            <div class="flex flex-row">
                                                <span v-if="splitz.splitted_user.first_name" class="text-sm leading-tight font-medium text-gray-600"> {{ splitz.splitted_user.last_name }} {{ splitz.splitted_user.first_name }}</span>
                                                <span v-else class="text-sm leading-tight font-medium text-gray-600"> {{ splitz.splitted_user.user_name }}</span>                                                
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
                        
                        <div class="flex flex-col mt-3" v-for="(index, input) in subtopic_inputs" :key="index">
                            <SubTopic :input=input v-on:subtopicCreated="fetchSubTopics($event)"></SubTopic>
                        </div>

                        <div class="flex flex-col mt-3" v-for="(index, input) in user_inputs" :key="index">
                            <div class="flex flex-row">
                                <input class="px-3 py-2 border border-gray-400 rounded-sm focus:outline-none text-gray-800 block w-full ml-3" type="text" v-model="input.name"  placeholder="Name"/>
                                <input class="px-3 py-2 border border-gray-400 rounded-sm focus:outline-none text-gray-800 block w-20 ml-3" type="text" v-model="input.amount" placeholder="Amount"/>
                            </div>
                            <div class="flex flex-row">
                                <button v-on:click=addSplitz() class="block bg-indigo-700 w-32 ml-4 rounded-sm shadow-md text-white px-2 py-1 mt-2">Add Splitz</button>
                                <div class="border-b border-gray-400 text-gray-500 focus:outline-none ml-8 px-8  hover:cursor-pointer py-1 mt-3 w-28">Cancel</div>
                            </div>
                            
                        </div>
                        <div>
                            <div class="flex items-center relative ml-4">
                                <button v-on:click=addUser()  class="ml-2 mt-2 flex items-center text-sm font-medium text-gray-400 overflow-hidden focus:outline-none">
                                <div class="">
                                    <svg class="h-4 w-4  mt-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path 
                                        stroke="currentColor" 
                                        stroke-width="1"  
                                        stroke-linecap="round"
                                        fill-rule="evenodd" 
                                        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="py-2 px-2 mt-2 ml-2 text-sm font-normal text-gray-600 tracking-wide">Add User</div>
                                </button>
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
import SubTopic from '../components/SubTopic.vue'
import {  mapState } from 'vuex'

export default ({    
    props:['topic_id'],
    
    data() {
        return{
            result: '',
            user_inputs: [],
            subtopic_inputs:[],
            error:null,
        }
    },    
    methods:{
        init(){
            var topic_id = this.$route.params.id
            this.$store.dispatch('loadTopicById', topic_id)
        },
        // Make Payment via RazorPay
        makePayment(){
            this.$modal.show('payment-start')
        },
        declinePay(){
                
        },
       addUser () {
           this.user_inputs.push(
               {
                   name:'',
                   amount:0
               }
           )
       },
       fetchSubTopics (value) {
           this.subtopic_inputs = []
           this.$store.dispatch('loadSubTopicId', value)
       },
       addSubtopic () {
           this.subtopic_inputs.push(
               {
                   input: ''
               }
           )
       },
       addSplitz () {        
           var data = {
            "members_list":["reina@gmail.com"],
            "sub_topic_id":this.$route.params.id,
            "created_by":localStorage.getItem('user'),
            "updated_by":localStorage.getItem('user'),
        }
        HTTP.post('v1/api/splitz', data)
                .then(response => {
                var topic_id = this.$route.params.id
                this.$store.dispatch('loadTopicById', topic_id)
                this.result = response
           }).
           catch(error => {
               this.error = error
           })
       }
    },
    
    watch: {
        '$route'(){
            this.init()
        }
    },    
    components:{
        SubTopic
    },
    computed: mapState([
        'splitz_details',
        'sub_topic'
    ])
})
</script>