<?php
if (!isset($_SESSION['usuario'])) {
    header('location: login');
}
?>

<div class="container mt-5">
    <form class="contenedor p-3" id="formulario_usuario">
        <div class="form-floating mb-3">
            <input class="form-control" type="text" name="nombre" id="nombre" placeholder=""
            value="<?=$_SESSION['usuario']['nombre']?>">
            <label for="nombre" class="text-dark">Ingrese su nombre</label>
        </div> 
        <div class="form-floating mb-3">
            <input class="form-control" type="text" name="apellido" id="apellido" placeholder=""
            value="<?=$_SESSION['usuario']['apellido']?>">
            <label for="apellidos" class="text-dark">Ingrese sus apellidos</label>
        </div> 
        <div class="form-floating mb-3">
            <input class="form-control" type="text" name="usuario" id="usuario" placeholder=""
            value="<?=$_SESSION['usuario']['usuario']?>">
            <label for="usuario" class="text-dark">Ingrese su nombre de usuario</label>
        </div> 
        <div class="form-floating mb-3">
            <input class="form-control" type="password" name="pass" id="pass" placeholder="">
            <label for="pass" class="text-dark">Ingrese su nueva contraseña</label>
        </div> 
        <button type="button" class="btn btn-secondary w-100" id="btn-actualizar">Acualizar informacion</button>
    </form>
</div>

<script src="<?=JS."datos_usuarios.js"?>"></script>