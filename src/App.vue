<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
body{
  margin: 0 auto;
  background-color: #F6FAFF !important;
}
a{
  color: #3E3E3E !important;
}
a.router-link-exact-active{
  color: #04809A !important;
  font-weight: 600;
  text-decoration-line: none !important;
}
</style>
