<template>
  <main id="dashboard-layout">

    <section class="side-bar__container">
      <div class="side-nav">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="">
        </div>

        <div class="navigation">
          <p>
            <router-link to="/dashboard" >
              <span class="icon"><i class="fas fa-th-large"></i></span>
              Dashboard
            </router-link>
          </p>

          <p>
            <router-link to="/sections" >
              <span class="icon"><i class="fas fa-book-medical"></i></span>
              Sections
            </router-link>
          </p>

          <p>
            <router-link to="/quiz">
              <span class="icon"><i class="fas fa-question-circle"></i></span>
              Quiz
            </router-link>
          </p>

          <p>
            <router-link to="/users">
              <span class="icon"><i class="fas fa-users"></i></span>
              Users
            </router-link>
          </p>

          <p>
            <router-link to="/admin">
              <span class="icon"><i class="fas fa-user-cog"></i></span>
              Admin
            </router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="w-100">
      <div class="top">
        <div class="d-flex justify-content-end align-items-center">
          <div class="top-nav-content">
            <div class="form-group search-container pt-2">
              <input type="text" class="form-control search" placeholder="Search">
              <i class="fas fa-search search-icon"></i>
            </div>
            <div class="avatar">
              <img src="../assets/img/hs1.jpg" alt="">
            </div> 
            <div>
              <p class="pt-3" style="font-size:14px">
                Logout
                <i class="fas fa-arrow-alt-circle-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="main-section__container">
        <router-view></router-view>
      </div>
    </section>

  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
#dashboard-layout {
  display: flex;
  /* position: relative; */
  /* background-color: #DDF2F8; */
  /* height: AUTO; */
}
#dashboard-layout .side-nav{
  padding: 20px 50px 0px 30px;
  width: 13rem;
  background-color: #ffffff;
  color: #707070;
  height: 100vh;
  position: fixed;
  left: 0;
  bottom: 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 ); 
  z-index: 31
}
#dashboard-layout .icon{
  margin-right: 30px;
}
#dashboard-layout .logo{
  text-align: center;
 
}
#dashboard-layout .logo img{
  margin: auto;
  margin-bottom: 10px;
  height: 2.5rem
}
#dashboard-layout .navigation p{
  margin: 25px 0px;
  font-size: 14px;
  font-weight: 500;
}
#dashboard-layout .navigation p{
  color: #707070;
  text-decoration-line: none;
}
#dashboard-layout .navigation p a:hover{
  color: #04809A;
  text-decoration-line: none;
}
#dashboard-layout .avatar img{
  height: 27px;
  width: 27px;
  object-fit: cover;
  border-radius: 100%;
}
#dashboard-layout .avatar{
  margin-right: 20px; 
}
#dashboard-layout .top-nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* align-self: center; */ 
}
#dashboard-layout .top-nav-content p{
  margin-right: 40px;
}
#dashboard-layout .top{
  background-color: #ffffff;
  position: fixed;
  width: 100vw;
  z-index: 30;
  overflow: hidden;
}
#dashboard-layout .search-container {
  position: relative;
  margin-right: 40px; 
  /* display: flex;
  align-items: center; */

}
#dashboard-layout .search-icon {
  position: absolute;
  top: 16px;
  left: 20px;
  color: #04809A;
}
#dashboard-layout .search{
  background-color: #F6FAFB;
  color: #04809A;
  padding-left: 3rem;
  border-color: #DDF2F8;
  margin-bottom: -5px;
}
#dashboard-layout .search::placeholder {
  color: #04809A;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
#dashboard-layout .search:focus,
#dashboard-layout .search:active
 {
   box-shadow: none;
   outline: none;
}
#dashboard-layout .main-section__container{
    width: 80vw;
    margin-left: 17.3vw;
    margin-top: 5rem;
    /* background-color: #DDF2F8; */
}
</style>