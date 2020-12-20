<template>
  <div id="app" class="app">

    <div class="header">
      <nav>
        <img src="./assets/logo.png" alt="MisFinanzas Logo" class="logo" v-on:click="init"/>
        <ul>
          <li><a class="login-menu" v-on:click="init" v-if="is_auth">Iniciar Sesión</a></li>
          <li><a class="register-menu" v-on:click="register" v-if="is_auth">Registrarse</a></li>
          <li><a class="logout-menu" v-on:click="logout" v-if="is_auth">Cerrar Sesión</a></li>
        </ul>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="background"></div>

    <div class="footer">
      <div class="copyright">
        <p>Copyright (c) Mis Finanzas 2020</p>
        <p>Proyecto final para el Ciclo 3 de MisiónTIC 2022. Conoce más <a href="https://github.com/Happygallo/misfinanzas-app">aquí</a></p>
      </div>
    </div>

  </div>
</template>


<script>

import vueRouter from 'vue-router'

export default {
  name: "App",

  data: function() {
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },

  components: {

  },

  methods: {
    //Verifica si el usuario está autenticado, si lo está lo dirige a su página principal y si no a la página de autenticación.
    updateAuth: function() {
      var self = thisself.is_auth = localStorage.getItem('isAuth') || false

      if (self.is_auth == false) {
        self.$router.push({name: "user_auth"})
      } else {
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params: {username: username}})
      }
      
    },

    //Actualiza el localStorage con el usuario autenticado verdadero y su username
    login: function(username) {
      localStorage.setItem('current_username')
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    //Elimina de localStorage el usuario autenticado y su username.
    logout: function() {
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username")
        this.$router.push({ name: "user", params: {username: username}});
      }
    },

    register: function () {
      if (this.$route.name != "register") {
        this.$router.push({ name: "register" });
      }
    },

    //Dirige a root y después verifica si hay un usuario autenticado
    created: function () {
      this.$router.push({name: "root"})
      this.updateAuth()
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

nav {
  background: white;
  height: 96px;
  width: 100%;
}

img.logo {
  max-width: 255pt;
  padding: 0 48px;
}

nav ul {
  float: right;
  margin-right: 36px;
}

nav ul li {
  display: inline-block;
  line-height: 96px;
  margin: 0 12px;
}

nav ul li a {
  color: white;
  font-size: 18px;
  padding: 11px 22px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #4a67ff;
}

nav ul li a.login-menu {
  color: #4a67ff;
  background-color: white;
}

nav ul li a.register-menu {
  color: white;
  background-color: #4a67ff;
  font-weight: 500;
}

a:hover {
  opacity: 0.5;
}

.background {
  position: absolute;
  background-color: #4a67ff;
  height: 360px;
  margin: 0 auto;
  width: 100%;
  top: 96px;
  z-index: -1;
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
  line-height: 100px;
  font-weight: medium;
  font-size: 14px;
  background-color: white;
}
</style>