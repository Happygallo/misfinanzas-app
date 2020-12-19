<template>
    <div id="starComponent">
        <div id="mensaje">
            <h1>Bienvenido {{username}}</h1>
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
            axios.get("https://localhost:8000/users/" + this.username)
                .then((result) => {
                    
                })
                .catch((error) => {
                    alert("ERRORServidor");
                });
        }
}
</script>

<style>
h1 {
    font-size: 36px;
    font-weight: bold;
    color: white;
    padding: 140px;
}

#mensaje {
    text-align: center;
    height: 70vh;
}
</style>