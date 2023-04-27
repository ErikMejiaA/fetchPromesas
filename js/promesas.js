const persona = {
    nombre : "carlos",
    edad : 45,
    clave : "Iroman"
}

const retornaPersona = ({ nombre, edad }) => {
    console.log( nombre, edad );
}

retornaPersona( persona );

const useContext = ({ clave, nombre, edad, rango = 'Capitan'}) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 14.1232,
            lng : -12.3232
        }
    }
}

const { nombreClave, anios, latlng : { lat, lng } } = useContext( persona );
console.log(nombreClave, anios);
console.log( lat, lng );