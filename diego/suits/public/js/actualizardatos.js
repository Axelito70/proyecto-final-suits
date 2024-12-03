// Función para actualizar los datos del usuario
const actualizar_usuario = () => {
    let data = new FormData();
    data.append("metodo", "actualizar_usuario");
    data.append("nombre", $("#nombre").val().trim());
    data.append("apellido", $("#apellido").val().trim());
    
    // Nuevos campos de contraseña
    const nuevaContrasena = $("#nueva_contrasena").val().trim();
    const confirmarContrasena = $("#confirmar_contrasena").val().trim();

    if ($("#nombre").val().trim() === "" || $("#apellido").val().trim() === "") {
        swal("Error", "Todos los campos deben estar completos.", "warning");
        return;
    }

    if (nuevaContrasena !== "" && nuevaContrasena !== confirmarContrasena) {
        swal("Error", "Las contraseñas no coinciden.", "warning");
        return;
    }

    // Si la contraseña se ha llenado, se agrega al FormData
    if (nuevaContrasena !== "") {
        if (nuevaContrasena.length < 8) {
            swal("Error", "La nueva contraseña debe tener al menos 8 caracteres.", "warning");
            return;
        }
        data.append("nueva_contrasena", nuevaContrasena);
    }

    fetch("./app/controller/Datosusuarios.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] === 1) {
            swal("Actualizado", respuesta[1], "success");
            cargar_datos_usuario();  // Recargar los datos después de actualizar
            $('#modalEditar').modal('hide');
        } else {
            swal("Error", respuesta[1], "error");
        }
    });
}

// Botón para guardar los cambios del usuario
$("#btn_guardar").on('click', function() {
    actualizar_usuario();
});
