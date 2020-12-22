<template>
  <div class="formulario">
    <div class="titulos">
      <h1 class="titulo-formulario">Nuevo Gasto</h1>
      <h4 class="subtitulo-formulario">Llena los campos para añadir un nuevo gasto</h4>
    </div>
    <div>
      <form class="form" v-on:submit.prevent="processMovement">
        <label class="entrada-texto" for="concept">Concepto</label>
        <input class="campo-texto" type="text" v-model="concept"/>
        <label class="entrada-texto" for="price">Valor</label>
        <input class="campo-texto" type="text" v-model="amount" />

        <input type="submit" value="Añadir Gasto" id="enviar" />
      </form>
    </div>
    <div class="opcion">
      <li><a class="boton-cancelar" v-on:click="cancel">Cancelar</a></li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",

  data: function () {
    return {
      movement_in: {
        username: "test",
        concept: "123",
        amount: "0",
      },
    };
  },

  methods: {
    processMovement: function() {
      var self = this
      let movement = {
                id: 10,
                username: this.username,
                concept: this.concept,
                amount: this.amount,

            }
      axios.post("http://localhost:8000/movements/add", movement,  {headers: {}})
      .then((result) => {
        alert("Presupuesto establecido");
        self.$router.push({ name: "user"});
      })
      .catch((error) => {
          alert("Error");
      });
    },

    cancel: function() {
      this.$router.push({name: "user"})
    },
  },

  created: function () {
    this.username = this.$route.params.username;
    let self = this;
    axios
      .get("http://localhost:8000/users/" + this.username)
      .then((result) => {})
      .catch((error) => {
        alert("ERRORServidor");
      });
  },
};
</script>

<style>
.formularios {
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

.titulo-formulario {
  font-size: 36px;
  font-weight: bold;
}

.subtitulo-formulario {
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  padding-top: 6px;
}

.campo-texto,
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

.entrada-texto {
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
  color: #4a67ff;
}

.boton-cancelar {
  color: #f1522f;
  cursor: pointer;
}
</style>