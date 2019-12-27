<template>
    <div>
        <nav>
            <div>
                <div class="flex" v-for="user in users" :key="user.id">
                    <svg class="mt-2 h-3 w-3 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    <h2 class="text-xs font-semibold text-indigo-600 px-2 py-2 tracking-wide">{{ user.last_name }} {{ user.first_name }}</h2>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {HTTP} from "../axios-common"

export default {
    data(){
        return {
            users:[],
            error:null,
        }
    },

    mounted(){
        HTTP.get('/userlist').
        then(response => {
            this.users = response.data
        })
        .catch(error => {
            this.error = error
        })
    }
}
</script>