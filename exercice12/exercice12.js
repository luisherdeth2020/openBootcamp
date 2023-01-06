/**----------------------------------------------
 * *                   EXERCICE 12
 *
 *
 *
 *
 *---------------------------------------------**/

// Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

let res = [0, 1];

for (let k = 0; k < 10; k++) {
	let getResult = res[k] + res[k + 1];
	let result = getResult;

	res.push(result);
}
res.shift();
res.pop();
