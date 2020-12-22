<template>
  <div id="resumen">
    <div class="resumen-superior">
      <div>
        <h1 id="mensajeBienvenida">Hola, {{ username }}</h1>
      </div>

      <div class="datos">
        <div class="tarjeta-datos">
          <p class="valor-dato" id="presupuesto">${{ presupuesto }}</p>
          <p class="nombre-dato">Presupuesto</p>
        </div>
        <div class="tarjeta-datos">
          <p class="valor-dato" id="gastos">${{ gastos }}</p>
          <p class="nombre-dato">Gastos</p>
        </div>
        <div class="tarjeta-datos">
          <p class="valor-dato" id="restante">${{ restante }}</p>
          <p class="nombre-dato">Restante</p>
        </div>
      </div>
    </div>
    <div id="resumen-inferior">
      <div id="botones">
        <li>
          <a v-on:click="newMovement" class="accion" id="boton-gasto"
            ><span class="material-icons">add_circle_outline</span> Nuevo
            Gasto</a
          >
        </li>
        <li>
          <a v-on:click="newBudget" class="accion" id="boton-presupuesto"
            ><span class="material-icons">attach_money</span> Presupuesto</a
          >
        </li>
      </div>
      <div id="movimientos">
        <h2 id="tus-gastos">Tus Gastos</h2>
        <div class="tarjeta-movimiento" v-for="(value, index) in movimientos" v-bind:key="index">
          <div class="valores">
            <p id="valor-gasto">${{ value.amount }}</p>
            <p id="fecha-gasto">{{ value.date }}</p>
          </div>
          <div class="concepto">
            <p id="titulo-concepto">Concepto</p>
            <p id="concepto">{{ value.concept }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",

  data: function () {
    return {
        username: "",
        presupuesto: 0,
        gastos: 0,
        restante: 0,
        movimientos: [{
          amount: 0,
          date: "21/12/2020",
          concept: "Descripción"
        }]
    };
  },

  methods: {
    newMovement: function() {
      let username = localStorage.getItem("current_username")
      this.$router.push({name: "user_movement", params:{ username: username }})
    },

    newBudget: function() {
      let username = localStorage.getItem("current_username")
      this.$router.push({name: "user_budget", params:{ username: username }})
    },
  },

  created: function () {
    this.username = this.$route.params.username;
    let self = this;
    axios
      .get("https://api-misfinanzas.herokuapp.com/users/" + this.username)
      .then((result) => {
        self.presupuesto = result.data.budget
        self.gastos = result.data.gastos
        self.restante = result.data.restante
        self.movimientos = result.data.movimientos
      })
      .catch((error) => {
        alert("ERRORServidor");
      });
  },
};
</script>

<style>
#mensajeBienvenida {
  font-size: 36px;
  font-weight: bold;
  color: white;
  padding: 120px 8px 36px 8px;
}

#mensaje2 {
  text-align: center;
  height: 70vh;
}

.tarjeta-datos {
  background-color: white;
  padding: 30px;
  width: 30%;
  vertical-align: middle;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  margin: 8px;
}

.nombre-dato {
  font-size: 18px;
  text-align: center;
}

.valor-dato {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

#resumen {
  width: 900px;
  margin: auto;
}

#gastos {
  color: #f1522f;
}

#restante {
  color: #3fcc88;
}

.accion {
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
  font-size: 18px;
  margin: 12px 8px;
  width: 230px;
  display: flex;
  cursor: pointer;
}

#boton-presupuesto {
  background-color: #3fcc88;
}

#boton-gasto {
  background-color: #4a67ff;
}

#resumen-inferior {
  display: flex;
  margin-top: 48px;
}

.tarjeta-movimiento {
  background-color: white;
  padding: 16px 16px;
  vertical-align: middle;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-flex;
  margin: auto;
  width: 600px;
  margin-top: 12px;
}

#tus-gastos {
  font-size: 24px;
  font-weight: 500;
  opacity: 0.5;
}

#valor-gasto {
  font-size: 28px;
  font-weight: bold;
}

#fecha-gasto {
  font-size: 18px;
}

#titulo-concepto {
  font-size: 14px;
  font-weight: bold;
  opacity: 0.6;
}

#concepto {
  font-size: 18px;
}

.concepto {
  margin: auto;
}
#movimientos {
  margin: 8px 16px;
}

.material-icons {
    margin-right: 8px;
}
</style>