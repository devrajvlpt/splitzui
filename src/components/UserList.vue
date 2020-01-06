<template>
    <div>
        <nav>
            <div>
                <div class="flex" v-for="user in users" :key="user.id">
                    <div>
                        <button class="ml-2 py-3">
                        <img
                            class="h-10 w-10 rounded object-cover"
                            src="https://images.unsplash.com/photo-1485203535145-9eb0f2707965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80" alt="Not available">
                        </button>
                    </div>
                    <h2 class="mt-3 text-xs font-semibold text-gray-700 uppercase px-2 py-2 tracking-wide">{{ user.splitted_user.last_name }} {{ user.splitted_user.first_name }}</h2>
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