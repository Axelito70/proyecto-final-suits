
const consulta = () => {
    let data = new FormData();
    data.append("metodo", "obtener_datos");
    fetch("./app/controller/Productos.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        let contenido = ``, i = 1;
        respuesta.map(producto => {
            contenido += `
                <tr>
                    <th>${i++}</th>
                    <td>${producto['producto']}</td>
                    <td>${producto['precio']}</td>
                    <td>${producto['unidades']}</td>
                    <td>
                        <button type="button" class="btn btn-warning" onclick="precargar(${producto['id_producto']})"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger" onclick="eliminar(${producto['id_producto']})"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            `;
        });
        $("#contenido_producto").html(contenido);
        $('#myTable').DataTable();
    });
}


const precargar = (id) => {
    let data = new FormData();
    data.append("id_producto", id);
    data.append("metodo", "precargar_datos");
    fetch("./app/controller/Productos.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        $("#edit_producto").val(respuesta['producto']);
        $("#edit_precio").val(respuesta['precio']);
        $("#edit_unidades").val(respuesta['unidades']);
        $("#id_prodcuto_act").val(respuesta['id_producto']);
        $("#editarModal").modal('show');
    });
}

// Función para actualizar un producto
const actualizar = () => {
    let data = new FormData();
    data.append("id_producto", $("#id_prodcuto_act").val());
    data.append("producto", $("#edit_producto").val());
    data.append("precio", $("#edit_precio").val());
    data.append("unidades", $("#edit_unidades").val());
    data.append("metodo", "actualizar_datos");
    fetch("./app/controller/Productos.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] == 1) {
            swal("Éxito", respuesta[1], "success");
            consulta();
            $("#editarModal").modal('hide');
        } else {
            swal("Error", respuesta[1], "error");
        }
    });
}


const agregar = () => {//solo son alertas para poder dar la respuesta de la funcionalidad.
    let data = new FormData();
    data.append("producto", $("#producto").val());
    data.append("precio", $("#precio").val());
    data.append("unidades", $("#unidades").val());
    data.append("metodo", "insertar_datos");
    fetch("./app/controller/Productos.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        if (respuesta[0] == 1) {
            swal("Éxito", respuesta[1], "success");
            consulta();
            $("#agregarModal").modal('hide');
        } else {
            swal("Error", respuesta[1], "error");
        }
    });
}

const eliminar = (id) => {
    swal({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            let data = new FormData();
            data.append("id_producto", id);
            data.append("metodo", "eliminar_datos");
            fetch("./app/controller/Productos.php", {
                method: "POST",
                body: data
            })
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                if (respuesta[0] == 1) {
                    swal("Eliminado", respuesta[1], "success");
                    consulta();
                } else {
                    swal("Error", respuesta[1], "error");
                }
            });
        }
    });
}

$('#btn_actualizar').on('click', () => {
    actualizar();//este boton sirve para poder validar la programacion y que sea funcional.
});

$('#btn_agregar').on('click', () => {
    agregar();
});

consulta();
