<template>
    <div>        
        <div>
            <div class="flex flex-row justify-between">
                <h1 class="px-1 text-black text-left mt-4 mx-8 font-normal">Create a Subtopic</h1>                    
            </div>
        </div>            
        <div class="flex flex-row">
        <div class="mt-3 min-w-full">
            <input type="text" v-model="sub_topicname" class="text-gray-800 ml-8 focus:outline-none rounded-lg border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Name">
        </div>
        </div>
        <div class="flex flex-row ml-4">
            <button v-on:click=addSubTopic() class="block bg-yellow-500 w-32 ml-4 rounded-lg shadow-md text-white px-2 py-1 mt-2">Add Subtopic</button>
            <button v-on:click=closeSubTopic() class="border-gray-400 text-gray-500 focus:outline-none  foucs:border-b ml-4 px-8  hover:cursor-pointer py-1 mt-3 w-28">Cancel</button>
        </div>
    </div>
</template>
<script>
import {HTTP} from '../axios-common'

export default {  
  data () {
      return{
          sub_topicname: '',
          sub_topicamount: 0,
          sub_topicdescription: '',
          topic_id:0,
          created_by:0,
          updated_by:0,
          result: '',
          error: ''          
      }
  },
  props: 'input',
  methods:{
      addSubTopic () {
          var data = {
              sub_topicname: this.sub_topicname,
              sub_topicamount: 0,
              sub_topicdescription: 'Untitled',
              topic_id: this.$route.params.id,
              created_by: localStorage.getItem('user'),
              updated_by: localStorage.getItem('user')
          }
        HTTP.post('v1/api/subsection', data).
            then(response => {
                this.result = response.data['id']
                this.$emit('subtopicCreated', response.data['id'])
           }).
           catch(error => {
               this.error = error
           })
      },
      closeSubTopic(){
          this.$emit('subtopicCreated', -1)
      }
  }
  
}
</script>