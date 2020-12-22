<template>
  <div class="formulario">
    <div class="titulos">
      <h1 class="titulo-formulario">Iniciar Sesión</h1>
      <h4 class="subtitulo-formulario">Inicia sesión para seguir mejorando tus finanzas</h4>
    </div>
    <div id="formSesion">
      <form class="form" v-on:submit.prevent="processAuthUser">
        <label for="username">Usuario</label>
        <input class="campo-texto" v-model="user_in.username" type="text"/>
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="user_in.password"
          type="password"
        />
        <input type="submit" value="Ingresar" id="enviar"/>
      </form>
    </div>
    <div class="opcion">
      <p>¿No tienes una cuenta?</p>
      <a v-on:click="register" class="secondButton">Registrarme</a>
    </div>
  </div>
</template>

<script>
import axios from'axios';

export default {
  name: 'UserAuth',
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
            axios.post("http://localhost:8000/users/auth/", self.user_in,  {headers: {}})
                .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("Contraseña incorrecta.");
                });
        },

        register: function () {
          if (this.$route.name != "register") {
          this.$router.push({ name: "user_register" });
          }
        },
    }
}
</script>

<style>
.formulario {
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

.titulos {
  padding-top: 36px;
  text-align: center;
}

.titulo-formulario{
  font-size: 36px;
  font-weight: bold;
}

.subtitulo-formulario{
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

label[for="username"],
label[for="password"] {
  font-weight: 500;
  font-size: 18px;
}

.opcion {
  text-align: center;
  font-weight: 500;
  padding-bottom: 24px;
}

.secondButton {
  line-height: 2;
  color: #3FCC88;
  cursor: pointer;
}
</style>