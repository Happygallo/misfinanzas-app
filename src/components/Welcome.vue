<template>
    <div id="starComponent">
        <div id="mensaje2">
            <h1 id="mensajeBienvenida">Bienvenido {{username}}</h1>
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