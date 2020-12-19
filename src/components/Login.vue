<template>
  <div id="login">
    <div id="mensaje">
      <h1 class="title">Iniciar Sesión</h1>
      <h4 id="subtitle">Inicia sesión para seguir mejorando tus finanzas</h4>
    </div>
    <div id="formSesion">
      <form class="form" v-on:submit.prevent="processAuthUser">
        <label for="username">Usuario</label>
        <input id="username" v-model="user_in.username" type="text"/>
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="user_in.password"
          type="password"
        />
        <input type="submit" value="Ingresar" id="enviar"/>
      </form>
    </div>
    <div id="opcion">
      <p>¿No tienes una cuenta?</p>
      <router-link :to="'/register'" class="secondButton">Registrarme</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from'axios';
export default {
  name: 'login',
  data: function() {
    return {
      user_in: {
                username:"",
                password:""
            }
    }
  },

  methods: {
        processAuthUser: function(){
            var self = this
            axios.post("https://api-misfinanzas.herokuapp.com/users/auth/", self.user_in,  {headers: {}})
                .then((result) => {
                    //alert("Autenticación Exitosa");
                    this.$router.push('/welcome/' + self.user_in.username);
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");
                });
        }
    }
}
</script>

<style>
#login {
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

#subtitle {
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

#enviar:hover {
  opacity: 0.6;
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
  color: #4a67ff;
}
</style>