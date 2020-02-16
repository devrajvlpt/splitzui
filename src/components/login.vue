<template>
    <div  class="h-screen w-full">        
        <div class="flex flex-row">            
            <h1 class="text-black font-bold">Splitz</h1>
            <div class="w-1/2 block bg-white mt-40">
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">User name</label>
                    <input type="text" v-model="username" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Mobile Number or Email Address">
                </div>
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Password</label>
                    <input type="password" v-model="password" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Password">
                </div>    

                <div class="mt-3 ml-8">
                    <button v-on:click="login()" class="w-72 block rounded shadow-lg px-2 py-1 hover:bg-indigo-500 border-indigo-700 text-white bg-indigo-700">Login</button>
                </div>
            </div>
          <!-- design  -->
        <div class="flex-1 w-1/2 bg-gray-200 h-screen">
            <h3 class="text-black">Hello2</h3>
        </div>
        </div>
              
    </div>
</template>
<script>
import {HTTP} from '../axios-common.js'

export default {
    data(){
        return{
            username:"",
            password:"",
            error:null,
        }
    },
    methods:{
        login(){
            if (this.username !== "" && this.password !==""){
                
                HTTP.post('auth-jwt',
                {
                    user_name:this.username,
                    password:this.password
                },                
                {
                    handlerEnabled: false
                }
                ).then(response=> {
                    localStorage.setItem('token',response.data['token']);
                    localStorage.setItem('user', response.data['user'].id)
                    this.$router.replace({name:"Dashboard"});
                    return response
                }).catch(error => {
                    this.error = error
                })

            }
        }
    }
}
</script>