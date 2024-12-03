const consultaMenuDia = () => {
    let data = new FormData();
    data.append("metodo", "obtener_datos");
    fetch("./app/controller/MenuDiaController.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        let contenido = ``, i = 1;
        respuesta.map(platillo => {
            contenido += `
                <tr>
                    <th>${i++}</th>
                    <td>${platillo['nombre_platillo']}</td>
                    <td>${platillo['precio']}</td>
                    <td>${platillo['componentes']}</td>
                    <td>${platillo['fecha_agregado']}</td>
                    <td><img src="${platillo['imagen_url']}" alt="${platillo['nombre_platillo']}" style="width: 100px;"></td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick="precargarMenuDia(${platillo['id']})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" onclick="eliminarMenuDia(${platillo['id']})"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            `;
        });
        $("#contenido_menu_dia").html(contenido);
        $('#tablaMenuDia').DataTable();
    });
};

const precargarMenuDia = (id) => {
    let data = new FormData();
    data.append("id", id);
    data.append("metodo", "precargar_datos");
    fetch("./app/controller/MenuDiaController.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        $("#edit_nombre_platillo").val(respuesta['nombre_platillo']);
        $("#edit_precio").val(respuesta['precio']);
        $("#edit_componentes").val(respuesta['componentes']);
        $("#edit_fecha_agregado").val(respuesta['fecha_agregado']);
        $("#edit_imagen_url").val(respuesta['imagen_url']);
        $("#id_platillo_act").val(respuesta['id']);
        $("#editarModalMenuDia").modal('show');
    });
};

const actualizarMenuDia = () => {
    let data = new FormData();
    data.append("id", $("#id_platillo_act").val());
    data.append("nombre_platillo", $("#edit_nombre_platillo").val());
    data.append("precio", $("#edit_precio").val());
    data.append("componentes", $("#edit_componentes").val());
    data.append("fecha_agregado", $("#edit_fecha_agregado").val());
    data.append("imagen_url", $("#edit_imagen_url").val());
    data.append("metodo", "actualizar_datos");
    fetch("./app/controller/MenuDiaController.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] == 1) {
            swal("Éxito", respuesta[1], "success");
            consultaMenuDia();
            $("#editarModalMenuDia").modal('hide');
        } else {
            swal("Error", respuesta[1], "error");
        }
    });
};

const agregarMenuDia = () => {
    let data = new FormData();
    data.append("nombre_platillo", $("#nombre_platillo").val());
    data.append("precio", $("#precio").val());
    data.append("componentes", $("#componentes").val());
    data.append("fecha_agregado", $("#fecha_agregado").val());
    data.append("imagen_url", $("#imagen_url").val());
    data.append("metodo", "insertar_datos");
    fetch("./app/controller/MenuDiaController.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(async respuesta => {
        if (respuesta[0] == 1) {
            await swal("Éxito", respuesta[1], "success");
            consultaMenuDia();
        } else {
            swal("Error", respuesta[1], "error");
        }
    });
};

const eliminarMenuDia = (id) => {
    swal({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            let data = new FormData();
            data.append("id", id);
            data.append("metodo", "eliminar_datos");
            fetch("./app/controller/MenuDiaController.php", {
                method: "POST",
                body: data
            })
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                if (respuesta[0] == 1) {
                    swal("Eliminado", respuesta[1], "success");
                    consultaMenuDia();
                } else {
                    swal("Error", respuesta[1], "error");
                }
            });
        }
    });
};

// Listeners para botones de agregar y actualizar
$('#btn_actualizar_menu_dia').on('click', () => {
    actualizarMenuDia();
});

$('#btn_agregar_menu_dia').on('click', () => {
    agregarMenuDia();
});

document.addEventListener('DOMContentLoaded',() => {
    consultaMenuDia();
});

// Cargar datos al inicio
