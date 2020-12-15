<template>
    <div id="register">
        <div id="mensaje">
            <h1> Registro</h1>
            <h4> Registrate para empezar a mejorar tus finanzas </h4>
        </div>
        <div id="formSesion">
            <form>
            <p>
                <label for="usuario">Usuario</label>
                <input 
                id="user"
                v-model= "name"
                type="text"
                name="user"
                >
            </p>
            <p>
                <label for="password">Contraseña</label>
                <input 
                id="password"
                v-model= "password"
                type="password"
                name="password"
                >
            </p>
            <p>
                <input
                    type="submit"
                    value="Registrarme"
                >
            </p>
            </form>
        </div>
        <div id="opcion">
            <p> ¿Ya tienes una cuenta? </p>
            <router-link :to="'/register'">Ingresar</router-link>
        </div>
        <div id="copyright">
            <p> Copyright (c) Mis Finanzas 2020 </p>
        </div>
    </div>
</template>