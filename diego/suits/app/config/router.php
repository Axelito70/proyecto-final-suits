<?php
    if(isset($_REQUEST['view'])){
        $vista = $_REQUEST['view'];
    }else{
        $vista = "inicio";
    }
    switch($vista){
        case "inicio": {
            require_once './views/home.php';
            break;
        }
        case "login": {
            require_once './views/login.php';
            break;
        }
        case "registro": {
            require_once './views/registro.php';
            break;
        }
        case "menuDia": {
            require_once './views/menuDia.php';
            break;
        }
        case "inventario": {
            require_once './views/inventario.php';
            break;
        }
        case "edit_usuario": {
            require_once './views/datos_usuarios.php';
            break;
        }
        default: {
            require_once './views/error404.php';
            break;
        }
    }
?>
