<template>
  <div id="register">
    <div id="mensaje">
      <h1 class="title">Registro</h1>
      <h4 class="subtitle">Registrate para empezar a mejorar tus finanzas</h4>
    </div>
    <div id="formSesion">
      <form class="form" v-on:submit.prevent="register">
        <label for="user">Usuario</label>
        <input id="user" v-model="user_in.username" type="text" />
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="user_in.password"
          type="password"
          name="password"
        />
        <input type="submit" value="Registrarme" />
      </form>
    </div>
    <div id="opcion">
      <p>¿Ya tienes una cuenta?</p>
      <router-link :to="'/'" class="secondButton">Ingresar</router-link>
    </div>
  </div>
</template>

<script>
import vueRouter from "vue-router";
import axios from "axios";
export default {
  name: "UserRegister",
  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    register: function () {
      var self = this;
      if (self.user_in.username == "") {
        alert("Ingrese un usuario");
      } else if (self.user_in.password == "") {
        alert("Ingrese una contraseña");
      } else {
        axios
          .post("https://api-misfinanzas.herokuapp.com/users/", self.user_in, { headers: {} })
          .then((result) => {
            alert("Usuario creado exitósamente");
            self.$router.push({ name: "user_auth"});
          })
          .catch((error) => {
            if (error.response.status == "404") alert("Ingrese un usuario");

            if (error.response.status == "403") alert("Ingrese una contraseña");
          });
      }
    },
  },
};
</script>

<style>
#register {
  margin-top: 98px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 36px;
  width: 512px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1;
}

#mensaje {
  padding-top: 36px;
  text-align: center;
}

h1 .title {
  font-size: 36px;
  font-weight: bold;
}

.subtitle {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  padding-top: 6px;
}

input[type="text"],
input[type="password"],
select {
  width: 100%;
  background-color: #f0f0f0;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  height: 46px;
}

input[type="submit"] {
  border-style: unset;
  background-color: #4a67ff;
  font-size: 18px;
  color: white;
  font-weight: 500;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  border-radius: 10px;
  margin-top: 36px;
  cursor: pointer;
}

input[type="submit"]:hover {
  opacity: 0.5;
}

.form {
  padding: 35px 24px 36px 24px;
}

label[for="user"],
label[for="password"] {
  font-weight: 500;
  font-size: 18px;
}

#opcion {
  text-align: center;
  font-weight: 500;
  padding-bottom: 24px;
}

.secondButton {
  line-height: 2;
  color: #3FCC88;
  cursor: pointer;
}

.secondButton:hover{
  opacity: 0.6;
}
</style>