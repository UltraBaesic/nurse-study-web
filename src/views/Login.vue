<template>
  <main id="home">
    <div class="main-details">
      <div>
        <div class="logo">
          <img src="../assets/img/logo-white.png" alt="website logo">
        </div>

        <div class="login-header">
          <p>
            Welcome Back
          </p>
          <span class="sub">
            Fill in your details to login
          </span>
          <form class="login-details">
            <div class="form-group email-address">
              <input type="email" v-model ="user.email" class= "input-field">
              <span class="floating-label">Email Address</span>
            </div>
            <div class="form-group password pt-3">
              <input type="password" v-model ="user.password" class="input-field">
              <span class="floating-label">Password</span>
            </div>
            <div class="forgot-password">Forgot Password</div>
            <button type="submit" class="btn mt-4 submit-button btn-md btn-primary" @click='handleLogin'>Submit</button>
          </form>
       </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
// eslint-disable-line
export default {
  data(){
    return{
      user:{
        email:'',
        password: ''
      },
      errors: []
    }
  },
  methods: {
   async handleLogin(e) {
      e.preventDefault()

      const payload = {
        email: this.user.email,
        password: this.user.password
      }

      let url = 'https://nurse-study-backend.herokuapp.com/auth/login'
      console.log(url)
      axios.post(url, payload)
        .then(res => {
           console.log(res.data.code);
          if(res.data.code == 200) {
            console.log(res);
            const token = res.data.token.token;
            console.log(res.data.token.token);
            localStorage.setItem('Nurse-Token', token)
            this.clearFields()
            this.$router.push('/dashboard')
          }
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
    min-height: 100vh;
    object-fit: cover;
    border-radius: 10;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
  }
  #home .main-details{
    background-color: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(20px);
    margin: auto; 
    width: 25rem;
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    top: 14vh;
    padding: 30px;
  }
  #home .logo img{
    height: 100px;
  }
  #home .login-header p{
    margin-bottom: 0px !important;
    font-size: 24px;
  }
  #home .login-header .sub{
    font-size: 12px;
    font-weight: normal;
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
    width: 300px;
    font-size:14px;
  }

  #home .input-field:focus,
  #home .input-field:active{
    outline: none !important;
    box-shadow: none !important;
  }

  #home .floating-label {
  position: absolute !important;
  pointer-events: none;
  left: 5px !important;
  bottom: 42px !important;
  transition: 0.3s ease all;
  font-size: 12px;
  color: #ffffff;
  opacity: 1;
}

#home input:not(:focus):valid ~ .floating-label {
  bottom: 12px;
  left: 25px;
  font-size: 12px;
  opacity: 0.8;
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
}
#home .login-details .form-group{
  background-color: none !important;
}
#home .submit-button{
  width: 200px;
  background-color: #04809A;
  border: none;
  padding: 12px 7px;
  font-size: 12px;
  letter-spacing: 1px;
}

#home .error-text {
  color: '#F88080';
  font-size: 13;
}
</style>
