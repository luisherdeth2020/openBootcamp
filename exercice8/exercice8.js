/**----------------------------------------------
 * *                   EXERCICE 8
 *
 *
 *
 *
 *---------------------------------------------**/
// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function hola() {
	return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
setTimeout(() => {
	console.log('Hola soy una promesa');
}, 5000);

// - Una función generadora de índices pares automáticos

function* generaId(i) {
	let id = 0;

	for (let k = 2; k <= i; k + 2) {
		yield k;
	}
}

const gen = generaId(6);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
