<template>
  <div class="app">
    <div class="header">
      <nav>
        <img src="logo.png" alt="MisFinanzas" />
        <button v-on:click="init">Iniciar Sesión</button>
        <button v-on:click="register">Registrarse</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div id="copyright">
        <p>Copyright (c) Mis Finanzas 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    init: function () {
      if (this.$route.name != "login") {
        this.$router.push({ name: "login" });
      }
    },
    register: function () {
      if (this.$route.name != "register") {
        this.$router.push({ name: "register" });
      }
    },
    beforeCreate: function () {
      if (this.$route.name != "welcome") {
        this.$router.push({ name: "welcome" });
      }
    },
  },
};
</script>

<style>
</style>