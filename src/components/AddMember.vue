<template>
    <div>
        <modal name="add-member" 
            transition="nice-modal-fade"
            :height="450"
            :width="650"
            :clickToClose = false
        >
            <h1 class="text-black text-left mt-4 mx-8 font-extrabold">Add Members</h1>
            <p class="text-gray-600 mx-8">Add members for the topic that you would like to share the amount.</p>
            
            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Member</label>
                <div class="mt-2">
                    <input type="text" v-model="member_name" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight text-gray-900" placeholder="Type email or mobile number">
                </div>
                
                <div class="mt-2">
                    <input type="text" v-model="member_name1" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight text-gray-900" placeholder="Type email or mobile number">
                </div>
                <div class="mt-2">
                    <input type="text" v-model="member_name2" class="w-1/2 ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight text-gray-900" placeholder="Type email or mobile number">
                </div>
            </div>


            <div class="mt-12 ml-8">
                <button class="bg-indigo-500 text-white hover:bg-indigo-600 rounded block px-12 py-1 leading-tight" v-on:click="addMemberList()">Add</button>
            </div>            
        </modal>        
    </div>
</template>
<script>
import {HTTP} from "../axios-common.js"

export default {
    
    data(){
        return {                        
            error:null,
            member_name : '',
            member_name1 : '',
            member_name2 : '',
        }
    },
    
    methods:{                
        addMemberList(){
            let members_list = []
            members_list.push(this.member_name);
            members_list.push(this.member_name1);
            members_list.push(this.member_name2);
            
            HTTP.post('v1/api/splitz', {
                members_list:members_list,
                topic_id:this.$route.params.id,
                created_by:parseInt(localStorage.getItem('user')),
                updated_y:parseInt(localStorage.getItem('user'))
                }).then(response => {
                    this.$modal.hide('add-member');
                    return response                    
            }).catch(error => {
                this.error = error
            })
        }
    },
    
}
</script>