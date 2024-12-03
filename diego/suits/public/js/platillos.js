const obtener_datos = () => {
    let data = new FormData();
    data.append('metodo', 'obtener_datos');
    
    fetch("./app/controller/MenuDiaController.php", {
        method: "POST",
        body: data
    })
    .then(respuesta => respuesta.json())
    .then((respuesta) => {
        let contenido = ``;
        respuesta.map(platillo => {
            contenido+= `
            <div class="card mb-5 me-4" style="width: 18%;">
                <div class="overflow-hidden p-2" style="height: 200px;">
                <img src="${platillo['imagen_url']}" class="card-img-top" alt="imagen_${respuesta['nombre_platillo']}">
                </div>
                <div class="card-body">
                    <p class="card-text fs-2">${platillo['nombre_platillo']}</p>
                    <p class="card-text fs-5">${platillo['componentes']}</p>
                    <p class="card-text">$${platillo['precio']}</p>  
                </div>
            </div>
            `;
        });
        document.getElementById('contenido').innerHTML = contenido;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    obtener_datos();
});