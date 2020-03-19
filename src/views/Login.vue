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
              <input type="email" outline class= "input-field">
              <span class="floating-label">Email Address</span>
            </div>
            <div class="form-group password pt-2">
              <input type="password" class="input-field">
              <span class="floating-label">Password</span>
            </div>
            <div class="forgot-password">Forgot Password</div>
            <button type="submit" class="btn mt-4 submit-button  btn-md btn-primary">Submit</button>
          </form>
       </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

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
  #home .input-field{
    border: 1.2px solid white;
    border-radius: 5px;
    background-color: transparent;
    padding: 8px 15px;
  }
  #home .floating-label {
  position: absolute;
  pointer-events: none;
  left: 5px;
  bottom: 42px;
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
  padding: 10px 5px;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>