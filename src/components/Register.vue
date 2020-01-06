<template>
    <div  class="h-screen w-full">        
        <div class="flex flex-row">            
            <h1 class="text-black font-bold">Splitz</h1>
            <div class="w-1/2 block bg-white mt-40">
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Mobile Number</label>
                    <input type="text" v-model="mobile_number" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Mobile Number">
                </div>
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Password</label>
                    <input type="password" v-model="password" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Password">
                </div>
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Email</label>
                    <input type="text" v-model="email" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Email">
                </div>    
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Frist Name</label>
                    <input type="text" v-model="first_name" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Frist Name">
                </div>    
                <div class="mt-3">
                    <label class="ml-8 text-gray-600 font-sm">Last Name</label>
                    <input type="text" v-model="last_name" class="ml-8 w-72 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight placeholder-gray-400" placeholder="Last Name">
                </div>    

                <div class="mt-3 ml-8">
                    <button v-on:click="register()" class="w-72 block rounded shadow-lg px-2 py-1 hover:bg-indigo-500 border-indigo-700 text-white bg-indigo-700">Register</button>
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
            mobile_number:"",
            password:"",
            email:"",
            first_name:"",
            last_name:"",
            error:null,
        }
    },
    methods:{
        register(){
                HTTP.post(
                'v1/api/users',
                {
                    mobile_number:this.mobile_number,
                    password:this.password,
                    email:this.email,
                    first_name:this.password,
                    last_name:this.mobile_number,                    
                }).then(response=> {                    
                    this.$router.replace({name:"Login"});
                    return response
                }).catch(error => {
                    this.error = error
                })
        }
    }
}
</script>