const URL_API = 'app/data/campers.json'
//Consumir JSON con Fecth API (Objeto)
//Cargar referencia a un boton

//Agregar listener

//+++++++++++++++++++++++++++++++++++++++
function loadData() {
    fetch(URL_API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            viewHTML(data);
        })
}

function viewHTML(myData) {
    const {id, nombre, edad, ingles} = myData;
    //Mostarmos los datos en html
    let contenerdor = document.querySelector('#contenedor');
    let datos = /* html */ `
    <p>id: ${id}</p>
    <p>nombre: ${nombre}</p>
    <p>edad: ${edad}</p>
    <p>ingles: ${ingles}</p>
    `
    contenerdor.innerHTML = datos;
}

document.querySelector('#verDatos').addEventListener('click',loadData)
