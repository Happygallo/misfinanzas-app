<template>
    <div id="budget">
        <div class="header">
            <li><a href="/login">Cerrar Sesión</a></li>
        </div> 
        <div id="budget_info">
            <form class="form" v-on:submit.prevent="processAuthUser">
                <div id="titulo">
                    <h1 class="title">Presupuesto</h1>
                    <h4 id="subtitle">Establece tu presupuesto del mes</h4>
                </div>
                <div id="informacion">
                    <label for="budget">Cantidad</label>
                    <br>
                    <input id="budget" type="int"/>
                </div>
            <input type="submit" value="Establecer" id="enviar"/>
            </form>
        </div>
        <div id="regresar">
            <li><a href="/welcome/:username">Regresar</a></li>
        </div>
    </div>  
</template>