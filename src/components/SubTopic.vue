<template>
    <div>        
        <div>
            <div class="flex flex-row justify-between">
                <h1 class="text-black text-left mt-4 mx-8 font-medium">Create a Subtopic</h1>                    
            </div>
        </div>            
        <div class="flex flex-row">
        <div class="mt-3">
            <input type="text" v-model="sub_topicname" class="w-full text-gray-800 ml-8 focus:outline-none focus:outline-none rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Name">
        </div>
        </div>
        <div class="flex flex-row">
            <button v-on:click=addSubTopic() class="block bg-indigo-700 w-32 ml-6 rounded shadow-md text-white px-2 py-1 mt-2">Add Subtopic</button>
            <div class="border-b border-gray-400 text-gray-500 focus:outline-none ml-8 px-8  hover:cursor-pointer py-1 mt-3 w-28">Cancel</div>
        </div>
    </div>
</template>
<script>
import {HTTP} from '../axios-common'

export default {
  props: ['input'],

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
      }
  }
  
}
</script>