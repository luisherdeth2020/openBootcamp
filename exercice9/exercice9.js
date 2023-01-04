/**----------------------------------------------
 * *                   EXERCICE 9
 *
 *
 *
 *
 *---------------------------------------------**/

// - Instala la dependencia Winston
// npm i winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const myFunction = (param) => {
	if (typeof param === 'string') {
		return param;
	}
	throw new Error('El parametro debe ser de tipo String');
};

// - Registra el error en un archivo a través de un try...catch
try {
	const word = myFunction("wikifronted");
	console.log('Es correcto');
} catch (error) {
    console.log('Error')
}
