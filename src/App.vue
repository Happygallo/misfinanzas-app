<template>
  <div id="app">
    <div class="header">
      <nav>
        <img src="./assets/logo.png" alt="MisFinanzas Logo" class="logo" />
        <ul>
          <li><a class="login" href="/">Iniciar Sesión</a></li>
          <li><a class="register" href="/register">Registrarse</a></li>
        </ul>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="background"></div>
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

nav ul li a.login {
  color: #4a67ff;
  background-color: white;
}

nav ul li a.register {
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