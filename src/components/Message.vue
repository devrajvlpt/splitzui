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
                        <div class="text-gray-800 font-semibold px-4 py-2 ml-4" v-for="sub in sub_topics" :key="sub.id">
                        <div v-if="sub.topic_id==global_topic_id">
                            <span class="border-b border-gray-400" >
                                {{ sub.sub_topicname }}
                            </span>
                            
                            <table class="mt-4" >
                                <tbody class="bg-white">
                                    
                                    <tr class="border-b border-gray-200" v-for="splitz in splitz_details" :key="splitz.id">
                                        {{splitz_details}}
                                        <div>                                      
                                            <td class="-ml-12 py-2">
                                            <button class="ml-1 py-1 focus:outline-none">
                                            <img
                                                class="h-6 w-6 rounded-full object-cover"
                                                src="../assets/images/he.png" alt="Not available">
                                            </button>                                    
                                        </td>
                                        <td class="px-1 py-2 mr-20 whitespace-no-wrap">
                                            <div class="flex items-center">
                                                <div class="flex flex-row">
                                                    <span class="text-sm leading-tight font-medium text-gray-600"></span>
                                                    <span class="text-sm leading-tight font-medium text-gray-600"></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-2 whitespace-no-wrap border-b border-gray-200">
                                            <div>
                                                <span class="text-black text-center px-1"></span>  
                                            </div>                                        
                                        </td>
                                        <td class="px-4 whitespace-no-wrap border-b border-gray-200">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Spent
                                            </span>
                                        </td>                                    
                                        </div>
                                    </tr>
                                </tbody> 
                            </table>

                            <div class="flex items-center relative ml-0">
                                <div class="flex flex-col">                            
                                    <div class="flex flex-col mt-3" v-for="(splitz_input, index) in user_inputs"  :key="index">
                                        <div>
                                            <div class="flex flex-row">
                                                <input class="px-3 py-2 border border-gray-400 rounded-sm focus:outline-indigo-300 rounded-sm text-gray-800 block w-full ml-3" type="text" v-model="splitzuser_name" :key="splitz_input.id" placeholder="Name"/>
                                                <input class="px-3 py-2 border border-gray-400 rounded-sm focus:outline-indigo-300 rounded-sm text-gray-800 block w-20 ml-3" type="text" v-model="splitzuser_amount" placeholder="Amount"/>
                                            </div>
                                            <div class="flex flex-row">
                                                <button v-on:click=addSplitz(splitz.sub_topic_id.id) class="block bg-indigo-700 w-32 ml-4 rounded-sm shadow-md text-white px-2 py-1 mt-2">Add Splitz</button>
                                                <button v-on:click=closeSplitz() class="border-b border-gray-400 text-gray-500 focus:outline-none ml-8 px-8  hover:cursor-pointer py-1 mt-3 w-28">Cancel</button>
                                            </div>
                                        </div>                                    
                                    </div>                                
                                    <button v-on:click=addUser(splitz.sub_topic_id.id)  class="mt-2 flex items-center text-sm font-medium text-gray-400 overflow-hidden focus:outline-none">
                                    <div>
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

                        <div class="flex flex-col mt-3" v-for="(input, index) in subtopic_inputs" :key="index">
                            <SubTopic :input=input v-on:subtopicCreated="fetchSubTopics($event)"></SubTopic>
                        </div>

                        
                        <div>                            
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
            splitzuser_name:'',
            splitzuser_amount:0,
            global_topic_id: this.$route.params.id,
            error:null            
        }
    },
    created () {
        var topic_id = this.$route.params.id
        this.$store.dispatch('loadSplitz', topic_id)
        this.$store.dispatch('loadSubTopicId', topic_id)
    },
    methods:{
       init() {

            this.global_topic_id = this.$route.params.id            
            this.$store.dispatch('loadSplitz', this.global_topic_id)
            this.$store.dispatch('loadSubTopicId', this.global_topic_id)
       },
       addUser (id) {
            this.user_inputs.push({
                    id:id,
                    show:false,
                    name: this.splitzuser_name,
                    amount: this.splitzuser_amount
                }
            )
       },

       fetchSubTopics (value) {
           if (value == -1){
               this.subtopic_inputs = []
           }
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

       addSplitz (subtopic_id) {           
           prompt(subtopic_id)
           var data = {
            "members_list":[this.splitzuser_name],
            "amount":this.splitzuser_amount,
            "sub_topic_id":subtopic_id,
            "created_by":localStorage.getItem('user'),
            "updated_by":localStorage.getItem('user'),
        }
        HTTP.post('v1/api/splitz', data)
                .then(response => {                
                this.result = response
                this.user_inputs = [] 
                this.splitzuser_name = ''
                this.splitzuser_amount= ''

           }).
           catch(error => {
               this.error = error
           })
       },

       closeSplitz(){
           this.user_inputs = []
       }
    },    
    
    components:{
        SubTopic
    },

    watch:{
        '$route.params.id': function () {
            this.init()
        }
    },
    computed: mapState([
        'splitz_details',
        'sub_topics'
    ])
})
</script>