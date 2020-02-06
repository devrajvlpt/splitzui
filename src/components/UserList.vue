<template>
    <div>
        <nav>
            <div>
                <div class="flex" v-for="user in users" :key="user.id">
                    <div>
                        <button class="ml-2 py-3">
                        <img
                            class="h-8 w-8 rounded-full object-cover"
                            src="../assets/images/he.png" alt="Not available">
                        </button>
                    </div>

                        <span v-if="user.splitted_user.first_name" class="mt-2 text-gray-800 font-sm px-2 py-2 tracking-wide">{{ user.splitted_user.first_name }} {{ user.splitted_user.last_name }}</span>                    
                        <span v-else class="mt-2 text-gray-800 font-sm px-2 py-2 tracking-wide">{{ user.splitted_user.user_name }}</span>                    
                    
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {HTTP} from "../axios-common"

export default {
    props:['topic_id'],

    data(){
        return {
            users:[],
            error:null,            
        }
    },
    methods:{
        init(){
            var topic_id = this.$route.params.id
            HTTP.get('v1/api/splitz/' + topic_id).
                then(response => {
                this.users = response.data
                }).
                catch(error =>{
                    this.error = error
                })
        }
    },
    watch: {
        '$route'(){
            this.init()
        }
    },

    mounted(){
        HTTP.get('v1/api/splitz/' + this.topic_id).
        then(response => {
           this.users = response.data       
        }).
        catch(error =>{
            this.error = error
        })
    }
}
</script>