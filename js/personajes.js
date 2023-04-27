const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const [ , p2, ] = personajes;
console.log( p2 );

const [ p1, , ] = personajes;
console.log( p1 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

//tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre