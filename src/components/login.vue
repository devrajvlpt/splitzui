<template>
    <div  class="h-screen w-full">        
        <div class="flex flex-row">            
            
            <div class="w-1/2 block bg-white mt-40">                
                <h1 class="text-black text-3xl font-extrabold lg:px-56 xl:px-72 xl:ml-12">Splitz</h1>
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="text" v-model="username" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-700 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Mobile Number or Email Address">
                </div>
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="password" v-model="password" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-700 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Password">
                </div>    

                <div class="mt-3 ml-28 xl:ml-64">
                    <button v-on:click="login()" class="w-72 block rounded shadow-lg px-2 py-1 hover:bg-indigo-500 border-indigo-700 text-white bg-indigo-700">Login</button>
                </div>

                <div class="flex flex-row mt-12 px-56">
                    <hr class="w-32 w bg-gray-300"> 
                    <span class="text-gray-700 -mt-3 ml-4 mr-4">or sign up with</span>
                    <hr class="w-32 bg-gray-300">
                </div>

                <div class="mt-3 ml-28 xl:ml-64">
                    <button class="w-72 block rounded shadow-md px-2 py-1  border bg-transparent text-black font-bold">Google</button>
                </div>
            </div>
          <!-- design  -->
        <div class="flex-1 w-1/2 bg-gray-200 h-screen">
            <img src="../assets/images/splitz3.svg" alt="" class="bg-fixed h-78 mt-28 ml-8 xl:mt-64 xl:ml-56">
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