const actualizar_informacion = () => {
    let data = new FormData(document.getElementById('formulario_usuario'));
    data.append('metodo','actualizar_usuario')
    fetch("app/controller/Datosusuarios.php",{
        method:"POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] == 1) {
            alert(`${respuesta[1]}`);
            cerrar_sesion();
        } else {
            if(`${respuesta[1]}`);
        }
    })
}

document.getElementById('btn-actualizar').addEventListener('click',() => {
    actualizar_informacion();
});