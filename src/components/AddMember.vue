<template>
    <div>
        <modal name="add-member" 
            transition="nice-modal-fade"
            :height="450"
            :width="650"
            :clickToClose = false
        >
            <h1 class="text-black text-left mt-4 mx-8 font-semibold">Add Friends</h1>
            <p class="text-gray-500 mx-8 py-2">Add Friends to split expenses directly</p>
            
            <div class="mt-3">
                <label class="ml-8 text-black font-normal">Friends</label>
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


            <div class="mt-12 ml-8 flex flex-row">
                <button class="bg-yellow-400 text-white hover:bg-yellow-500 rounded block px-12 py-1 leading-tight" v-on:click="addMemberList()">Add</button>
                <button class="ml-6 bg-gray-300 text-white focus:outline-none focus:shadow-outline hover:bg-gray-500 rounded block px-12 py-1 leading-tight" v-on:click="cancel()">Cancel</button>
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
            email: '',
            mobile_number: 0
        }
    },
    
    methods:{                
        addMemberList(){
            let members_list = []
            members_list.push(this.member_name);
            members_list.push(this.member_name1);
            members_list.push(this.member_name2);
            var user_list = []
            
            console.log(members_list)
            
            members_list.forEach(element => {
                var user = {}
                if (element.includes("@") == true){
                    user['mobile_number'] = 0
                    user['email'] = element
                    user['user_name'] = element

                }
                else{
                    user['mobile_number'] = element
                    user['user_name'] = element
                    user['email'] = ""
                }
                user["password"] = ""
                user["first_name"] = ""
                user["last_name"] = ""                
                user_list.push(user)    
            });
            
            console.log(user_list)
            

            HTTP.post(
            'v1/api/listfriend',
            {   
                user_list
            }
            ).then(response=> {                    
                console.log(response.data)
                this.$modal.hide('add-member');
                return response
            }).catch(error => {
                this.error = error
            })
        

        },
        cancel(){
            this.$modal.hide('add-member');
        }
    },
    
}
</script>