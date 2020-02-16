<template>
    <div >
        <modal name="create-topic" 
        transition="nice-modal-fade" 
        :scrollable= true
        :height="450"
        :width="650"
        :clickToClose = false
        >
        <div>
        <div class="flex flex-row justify-between">
            <h1 class="text-black text-left mt-4 mx-8 font-extrabold">Create a Topic</h1>            
            <span class="mt-4 mr-4">
                <button v-on:click="hideTopic()" class="overflow-hidden focus:outline-none focus:border-indigo-500">
                <svg class="h-5 w-5 -mt-1 ml-28 text-gray-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 172 172"
                    >
                    <g fill="none" 
                    fill-rule="nonzero" 
                    stroke="currentColor" 
                    stroke-width="1" 
                    stroke-linecap="butt" 
                    stroke-linejoin="miter" 
                    stroke-miterlimit="10" 
                    stroke-dasharray="" stroke-dashoffset="0" 
                    font-family="none" font-weight="none" font-size="none" 
                    text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="#ffffff"></path><g fill="currentColor"><path d="M45.74349,34.28802c-4.66401,0.00578 -8.85992,2.83567 -10.61285,7.15775c-1.75292,4.32207 -0.71362,9.27524 2.62873,12.52819l32.02604,32.02604l-32.02604,32.02604c-2.99552,2.87604 -4.20218,7.14678 -3.15461,11.16516c1.04756,4.01838 4.18566,7.15647 8.20404,8.20403c4.01838,1.04756 8.28912,-0.1591 11.16516,-3.15462l32.02604,-32.02604l32.02604,32.02604c2.87603,2.99556 7.14679,4.20225 11.1652,3.1547c4.0184,-1.04756 7.15652,-4.18567 8.20408,-8.20408c1.04756,-4.0184 -0.15913,-8.28917 -3.1547,-11.1652l-32.02604,-32.02604l32.02604,-32.02604c3.39139,-3.29657 4.4111,-8.33702 2.56778,-12.6926c-1.84331,-4.35558 -6.17151,-7.13275 -10.89903,-6.99334c-2.97902,0.08876 -5.80647,1.33381 -7.88333,3.47135l-32.02604,32.02604l-32.02604,-32.02604c-2.16155,-2.22196 -5.13056,-3.4742 -8.23047,-3.47135z"></path></g><path d="" fill="none"></path></g></svg>
                    </button>
            </span>
        </div>
        <p class="text-gray-600 mx-8">Topics where you form a group between colleague and buddies to share the expense.</p>
        </div>

            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Name</label>
                <input type="text" v-model="topic_name" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight">
            </div>
            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Amount</label>
                <input type="text" v-model="total_amount" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight">
            </div>
            <div class="mt-3">
                <div class="flex flex-row">
                    <label class="ml-8 text-black font-semibold">Description</label>
                    <span class="px-2 text-sm text-gray-700">Optional</span>
                </div>                
                <input type="text" v-model="topic_description" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight">
            </div>

            <div class="mt-12 ml-8">
                <button class="bg-indigo-500 text-white hover:bg-indigo-600 rounded block px-12 py-1 leading-tight" v-on:click="addTopic()">Create</button>
            </div>

            <p class="text-gray-600 mt-5 mx-8">You can form Topics with your friends and families</p>
        </modal>
    </div>
</template>

<script>
import {HTTP} from '../axios-common';
// import { mapState } from 'vuex'

export default {
    data(){
        return{
            result:{},
            topic_name:'',
            total_amount:'',
            topic_description:'',
        }
    },
    methods:{
       addTopic(){
           HTTP.post('v1/api/topic', {
               topic_name:this.topic_name,
               total_amount:this.total_amount,
               topic_description:this.topic_description,
               created_by:parseInt(localStorage.getItem('user')),
               updated_by:parseInt(localStorage.getItem('user'))
           },
            {
                handlerEnabled: true
            }).
           then(response => {
               this.$modal.hide('create-topic')
               this.$store.dispatch('loadTopics')               
               this.result = response            
           }).
           catch(error => {
               this.error = error
           })
            this.topic_name = ''
            this.total_amount = ''
            this.topic_description = ''

       },

       hideTopic(){
           this.$modal.hide('create-topic')
       }
    }
}
</script>