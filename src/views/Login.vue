<template>
  <main id="home">
    <div class="main-details">
      <div>
        <div class="logo">
          <img src="../assets/img/logo-white.png" alt="website logo">
        </div>

        <div class="login-header">
          <h4 class="login-header__header">
            Welcome Back
          </h4>
          <p class="sub-text">
            Fill in your details to login
          </p>
          <form class="login-details" @submit.prevent="handleLogin">
            <div class="form-group email-address">
              <label class="floating-label">Email Address</label>
              <input
                type="email"
                v-model ="user.email"
                class= "input-field eamil"
                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
              >
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
              </div>
            </div>
            <div class="form-group password pt-3">
              <label class="floating-label">Password</label>
              <input
                type="password"
                v-model ="user.password"
                class="input-field password"
                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
              >
              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                <span v-if="!$v.user.password.required">Password is required</span>
              </div>
              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                <span v-if="!$v.user.password.validatePassword">
                  <br>Password should be 8 characters long, and not more than 32 characters<br>
                </span>
              </div>
            </div>
            <p class="forgot-password">Forgot Password</p>
            <button
              type="submit"
              class="btn mt-4 submit-button btn-md btn-primary"
              :disabled='this.users.isFetching'
            >
              {{ this.users.isFetching ? 'Loading...' : 'Submit'}}
            </button>
          </form>
       </div>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
// eslint-disable-line
export default {
  data(){
    return{
      user:{
        email:'',
        password: ''
      },
      errors: [],
      submitted: false,
      disabled: false
    }
  },
  validations: {
    user: {
      email: { required },
      password: { required }
    }
  },
  // watch: {
  //   user: {
  //     deep: true,
  //     immediate: true,
  //     handler(x){
  //       if(x.password === ''){
  //         this.disabled = true;
  //       } else {
  //         this.disabled = false
  //       }
  //     }
  //   }
  // },
  computed:{
    ...mapState(["users"]),
    errorMessage(){
      return this.users.errorMessage
    }
  },
  methods: {
    ...mapActions(["adminLogin"]),
   // eslint-disable-next-line no-unused-vars
   async handleLogin(e) {
     this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        Vue.$toast.open({
          message: 'Please fill up your credential',
          type: 'info',
          position: 'top-right'
        });
      }

      // eslint-disable-next-line no-unused-vars
      let { email, password } = this.user
      this.adminLogin(this.user)
        .then(async () => {
          this.clearFields();
          this.$router.push('/dashboard');
        })
        .catch(error => {
          console.log(error)
        })
     },
     clearFields() {
      this.user.email= '',
      this.user.password= ''
     }
    }
}
</script>

<style scoped>
  #home{
    background: url("../assets/img/background-overlay.png") ;
    min-height: 100%;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    overflow: auto;
    left: 0;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
  }

  #home .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #home .login-header .login-header__header{
    text-align: center;
  }

  #home .email,
  .password {
    position: relative;
  }
  #home .main-details{
    background-color: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(20px);
    margin: auto; 
    width: 25rem;
    display: flex;
    justify-content: center;
    position: relative;
    top: 14vh;
    padding: 30px;
  }
  #home .logo img{
    height: 100px;
  }

  #home .floating-label {
    font-size: 12px;
    text-align: start;
  }
  #home .login-header{
    margin-bottom: 0px !important;
    font-size: 24px;
  }
  #home .login-header .sub-text{
    font-size: 12px;
    font-weight: normal;
    text-align: center;
  }
  #home .login-details{
    margin-top: 35px;
  }
  input[ type=text],
  input[type=password]{
    background-color: transparent !important ;
    color:#ffffff !important;

  }
  #home .input-field{
    border: 1.2px solid white !important;
    color: #ffffff;
    border-radius: 5px;
    background-color: transparent;
    padding: 8px 15px;
    width: 339px;
    font-size:14px;
  }

  #home .input-field:focus,
  #home .input-field:active{
    outline: none !important;
    box-shadow: none !important;
  }

#home .input {
  font-size: 15px;
  height: 40px;
  outline: 1px solid #ffffff;
  box-shadow: none !important;
  padding: 10px 0px 0 25px;
  color: #ffffff;
}

#home .email-address,
#home .password {
  position: relative;
}
#home .forgot-password{
  font-size: 12px;
  margin-top: -9px !important;
  text-align: right;
  cursor: pointer;
}
#home .login-details .form-group{
  background-color: none !important;
}
#home .submit-button{
  width: 200px;
  background-color: #04809A;
  box-shadow: none !important;
  outline: none !important;
  border: none;
  padding: 12px 7px;
  font-size: 12px;
  margin: auto;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
}

#home .error-text {
  color: '#F88080';
  font-size: 13;
}

#home .invalid-feedback span {
  font-size: 12px;
}
</style>
