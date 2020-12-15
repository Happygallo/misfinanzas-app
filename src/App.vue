<template>
  <div class="app"> 
    <div class="header">
      <nav>
        <button v-on:click="init"> Iniciar Sesion </button>
        <button v-on:click="register"> Registrarse </button>
      </nav>
    </div> 
    <div class="main-component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    init: function(){
      if(this.$route.name != "startSesion"){
        this.$router.push({name : "startSesion"})
      }
    },
    register: function(){
      if(this.$route.name != "register"){
        this.$router.push({name : "register"})
      }
    },
    beforeCreate: function(){
      if(this.$route.name != "startSesion"){
        this.$router.push({name : "startSesion"})
      }
    }
  }
 }
</script>

<style>
</style>