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

function* generaId() {
	let id = 0;
	// while(i %2 ==0){
	//     yield id++
	// }
	let generador = 4;
	while (true) {
		id++;

		console.log(id);

		if (generador % 2 == 0 && id < generador) {
			return id;
		}
		yield id;
	}
}

const gen = generaId();

console.log(gen.next().value);
