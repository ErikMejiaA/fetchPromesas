import { Heroes } from "../app/basedatos/heroes.js";


export const getHeroeById = (id) => Heroes.find( (heroe) => heroe.id === id );

console.log( getHeroeById(2) );

//find: solo me genera un solo objeto
//fliter: me genera un arreglo de muchos objetos 
export const getHeroesByOwner = ( owner ) => Heroes.filter( (heroe) => heroe.owner === owner);

console.log( getHeroesByOwner("DC") );
console.log( getHeroesByOwner("Marvel") );