<template>
    <NavComp/>
    <FooterComp/>
</template>
<script>
import NavComp from '@/components/NavComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {NavComp, FooterComp}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap');
#app {
  font-family: montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
