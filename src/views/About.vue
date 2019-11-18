<template>
  <div>    
      <div class="row ">
        <div class="col col-lg-7 regsiter-fill">
          <div class="register-know-how">How it works?</div>          
        </div>
        <div class="col col-lg-4">          
          <div class="form-group register-form">
            <div class="col-sm-12 mx-sm-4 mb-4">
              <div class="headers-reg">Sign UP</div>
            </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <input type="text" class="form-control"  placeholder="First name" v-model="firstName" required>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <input type="text" class="form-control"  placeholder="Last name" v-model="lastName" required>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <input type="text" class="form-control"  placeholder="Mobile number" v-model="mobileNumber" required>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <input type="text" class="form-control"  placeholder="Email" v-model="email" required>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <input type="text" class="form-control"  placeholder="password" v-model="password" required>
              </div>              
              <div class="col-sm-12 mx-sm-4 mb-4">
                <button v-on:click="callRegister" class="btn reg-primary">Sign up</button>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <hr><span>OR</span><hr>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <button  class="btn reg-secondary">Sign up with Google</button>
              </div>
              <div class="col-sm-12 mx-sm-4 mb-4">
                <a href="" class="text-secondary-signup">I have an account Sign in</a>
              </div>
          </div>
            
        </div>
      </div>     
  </div>
    
</template>

<script>
import {HTTP} from '../axios-common';

export default {
  
  data() {
    return {
        firstName:'',
        lastName:'',
        mobileNumber:'',        
        email:'',
        password:''
      }
    },
    
    methods: {
      callRegister: function(){

        HTTP.post('users', {
          first_name:this.firstName,
          last_name:this.lastName,          
          mobile_number:this.mobileNumber,
          email:this.email,
          password :this.password
          
        }).then(
          function (response) {            
            if (response.status == 201){
                return response.data
            }
          } 
        ).catch(function(error){
          error
        });
      }
    }
    
  
}
</script>
