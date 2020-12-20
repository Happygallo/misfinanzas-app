<template>
    <div id="starComponent">
        <div class="header">
            <li><a href="/login">Cerrar Sesión</a></li>
        </div> 
        <div id="mensaje2">
            <h1 id="mensajeBienvenida">Bienvenido {{username}}</h1>
        </div>
        <div id="datos">
                    <v-card
                    class="mx-auto"
                    max-width="344">
                        <v-card-text>
                            <div>
                                {concepto}
                                <p>Presupuesto</p>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card
                    class="mx-auto"
                    max-width="344">
                        <v-card-text>
                            <div>
                                $ {gastos}
                                <p>Gastos</p>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card
                    class="mx-auto"
                    max-width="344">
                        <v-card-text>
                            <div>
                                $ {restante}
                                <p>Restante</p>
                            </div>
                        </v-card-text>
                    </v-card>
        </div>
        <div id="informacion">
            <div id="botones">
                <li><a href="/budget/:username">Presupuesto</a></li>
                <li><a href="/new_movement/:username">Nuevo Gasto</a></li>
            </div>
            <div id="movimientos">
                 <v-card
                    class="mx-auto"
                    max-width="344">
                        <v-card-text>
                            <div>
                                {gasto}
                                {fecha}
                            </div>
                            <div>
                                <p>Concepto</p>
                                {concepto}
                            </div>
                        </v-card-text>
                    </v-card>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Welcome",

    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },

    created: function(){
            this.username = this.$route.params.username
            let self = this
            axios.get("https://api-misfinanzas.herokuapp.com/users/" + this.username)
                .then((result) => {
                    
                })
                .catch((error) => {
                    alert("ERRORServidor");
                });
        }
}
</script>

<style>
#mensajeBienvenida {
    font-size: 36px;
    font-weight: bold;
    color: white;
    padding: 140px;
}

#mensaje2 {
    text-align: center;
    height: 70vh;
}
</style>