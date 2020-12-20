<template>
    <div id="new_movement">
        <div class="header">
            <li><a href="/login">Cerrar Sesión</a></li>
        </div> 
        <div id="new_movement_info">
            <form class="form" v-on:submit.prevent="processAuthUser">
                <div id="titulo">
                    <h1 class="title">Nuevo Gasto</h1>
                    <h4 id="subtitle">Llena los campos para añadir un nuevo gasto</h4>
                </div>
                <div id="informacion">
                    <label for="concept">Concepto</label>
                    <br>
                    <input id="concept" type="text"/>
                    <br>
                    <label for="price">Valor</label>
                    <br>
                    <input id="price" type="int"/>
                </div>
            <input type="submit" value="Actualizar" id="enviar"/>
            </form>
        </div>
        <div id="regresar">
            <li><a href="/welcome/:username">Regresar</a></li>
        </div>
    </div>  
</template>