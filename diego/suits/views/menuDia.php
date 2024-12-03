<?php
    if(!isset($_SESSION['usuario'])){
        header("location:login");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú del Día</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.13.5/css/dataTables.bootstrap5.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1 class="text-center titulo-menu-dia">Menú del Día</h1> <!-- Clase para el título -->
    <div class="d-flex justify-content-end my-3">
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#agregarModalMenuDia">
            <i class="fa-solid fa-plus"></i> Agregar Platillo
        </button>
    </div>
    <table id="tablaMenuDia" class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>#</th>
                <th>Platillo</th>
                <th>Precio</th>
                <th>Componentes</th>
                <th>Fecha</th>
                <th>Imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="contenido_menu_dia">
        </tbody>
    </table>
</div>

    <div class="modal fade" id="agregarModalMenuDia" tabindex="-1" aria-labelledby="agregarModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title" id="agregarModalLabel">Agregar Nuevo Platillo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formAgregar">
                        <div class="mb-3">
                            <label for="nombre_platillo" class="form-label">Nombre del Platillo</label>
                            <input type="text" class="form-control" id="nombre_platillo" required>
                        </div>
                        <div class="mb-3">
                            <label for="precio" class="form-label">Precio</label>
                            <input type="number" class="form-control" id="precio" required>
                        </div>
                        <div class="mb-3">
                            <label for="componentes" class="form-label">Componentes</label>
                            <textarea class="form-control" id="componentes" rows="3" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="fecha_agregado" class="form-label">Fecha de Agregado</label>
                            <input type="date" class="form-control" id="fecha_agregado" required>
                        </div>
                        <div class="mb-3">
                            <label for="imagen_url" class="form-label">URL de la Imagen</label>
                            <input type="url" class="form-control" id="imagen_url" required>
                        </div>
                        <button type="button" id="btn_agregar_menu_dia" class="btn btn-success w-100">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editarModalMenuDia" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning text-white">
                    <h5 class="modal-title" id="editarModalLabel">Editar Platillo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formEditar">
                        <div class="mb-3">
                            <label for="edit_nombre_platillo" class="form-label">Nombre del Platillo</label>
                            <input type="text" class="form-control" id="edit_nombre_platillo" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit_precio" class="form-label">Precio</label>
                            <input type="number" class="form-control" id="edit_precio" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit_componentes" class="form-label">Componentes</label>
                            <textarea class="form-control" id="edit_componentes" rows="3" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="edit_fecha_agregado" class="form-label">Fecha de Agregado</label>
                            <input type="date" class="form-control" id="edit_fecha_agregado" required>
                        </div>
                        <div class="mb-3">
                            <label for="edit_imagen_url" class="form-label">URL de la Imagen</label>
                            <input type="url" class="form-control" id="edit_imagen_url" required>
                        </div>
                        <input type="hidden" id="id_platillo_act">
                        <button type="button" id="btn_actualizar_menu_dia" class="btn btn-warning w-100">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

  
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.min.js"></script>
    <script src="./public/js/menuDia.js"></script>
</body>
</html>
