<template>
    <div>
        <modal name="add-member" transition="nice-modal-fade">
            <h1 class="text-black text-left mt-4 mx-8 font-extrabold">Add Members</h1>
            <p class="text-gray-600 mx-8">Add members for the topic that you would like to share the amount.</p>
            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Members List</label>                
                <div class="px-6">
                    <vue-tags-input
                    v-model="tag"
                    :tags="tags"
                    :autocomplete-items="autocompleteItems"
                    :add-only-from-autocomplete="false"
                    @tags-changed="update"
                    placeholder="Mobile Number or Email ID"
                    />
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
import VueTagsInput from '@johmun/vue-tags-input';


export default {
    components:{
        VueTagsInput,
    },

    data(){
        return {
            tag:'',
            tags:[],
            autocompleteItems:[],
            error:null,
            debounce:null,
        }
    },
    watch: {
        'tag': 'initItems',
    },
    
    methods:{
        update(newUser){
            this.autocompleteItems = [];
            this.tags = newUser
        },
        initItems(){
            if(this.tag.length < 2 ) return;
            const url = `v1/api/userlist`

            clearTimeout(this.debounce);
            this.debounce = setTimeout(()=>{
                HTTP.get(url).
                then(response => {
                    this.autocompleteItems = response.data.map(a => {
                        return { text: a.email};
                    });
                }).catch((error => {
                    this.error = error;
                }))
            }, 600)

        },
        addMemberList(){
            let members_list = []
            this.tags.forEach(tag => {
                members_list.push(tag['text']);
            });            
            HTTP.post('v1/api/splitz', {
                members_list:members_list,
                topic_id:this.$route.params.id
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