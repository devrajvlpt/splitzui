<template>
    <div  class="h-screen w-full">        
        <div class="flex flex-row">            
            
            <div class="w-1/2 block bg-white mt-40">
                <h1 class="text-black text-3xl font-extrabold lg:px-56 xl:px-72 xl:ml-12">Splitz</h1>
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="text" v-model="user_name" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-500 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Email or Mobile Number">
                </div>
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="password" v-model="password" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-500 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Password">
                </div>                
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="text" v-model="first_name" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-500 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Frist Name">
                </div>    
                <div class="mt-3 ml-20 xl:ml-56">                    
                    <input type="text" v-model="last_name" class="ml-8 w-72 bg-white focus:outline-none focus:border-indigo-500 rounded border py-2 px-2 block relative leading-tight placeholder-gray-700" placeholder="Last Name">
                </div>    

                <div class="mt-3 ml-28 xl:ml-64">
                    <button v-on:click="register()" class="w-72 block rounded shadow-lg px-2 py-1 hover:bg-indigo-500 border-indigo-700 text-white bg-indigo-700">Register</button>
                </div>
                <div class="flex flex-row mt-12 px-56">
                    <hr class="w-32 w bg-gray-300"> 
                    <span class="text-gray-700 -mt-3 ml-4 mr-4">or sign up with</span>
                    <hr class="w-32 bg-gray-300">
                </div>

                <div class="mt-3 ml-28 xl:ml-64">
                    <button class="w-72 block rounded shadow-md px-2 py-1 bg-green-100 border bg-transparent text-black font-bold">Google</button>
                </div>
                
                
            </div>
          <!-- design  -->
        <div class="flex-1 w-1/2 bg-gray-200 h-screen">
            <img src="../assets/images/splitz1.svg" alt="" class="bg-fixed h-78 mt-20 ml-4 xl:mt-64 xl:ml-56">
        </div>
        </div>
              
    </div>
</template>
<script>
import {HTTP} from '../axios-common.js'

export default {
    data(){
        return{
            user_name:"",
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
                
                if (this.user_name.includes("@") == true){
                    this.mobile_number = 0
                    this.email = this.user_name
                }
                else{
                    this.mobile_number = this.user_name
                    this.email = ""
                }

                HTTP.post(
                'v1/api/users',
                {   
                    user_name:this.user_name,
                    mobile_number:this.mobile_number,
                    password:this.password,
                    email:this.email,
                    first_name:this.first_name,
                    last_name:this.last_name,                    
                },
                {
                    handlerEnabled: true
                }
                ).then(response=> {                    
                    this.$router.replace({name:"Login"});
                    return response
                }).catch(error => {
                    this.error = error
                })
        }
    }
}
</script>