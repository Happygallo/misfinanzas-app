<template>
    <div id="starSesion">
        <div id="mensaje">
            <h1>Iniciar Sesión</h1>
            <h4>Inicia sesión para seguir mejorando tus finanzas</h4>
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
                    value="Ingresar"
                >
            </p>
            </form>
        </div>
        <div id="opcion">
            <p>¿No tienes una cuenta?</p>
            <router-link :to="'/register'">Registrarse</router-link>
        </div>
    </div>
</template>