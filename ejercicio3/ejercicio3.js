/**----------------------
 **   BUCLE FOR
 *@param factorial num
 *@return valor
 *------------------------**/
function getFactorial(num) {
	let valor = 1;
	for (let i = 1; i <= num; i++) {
		valor = valor * i;
	}
	return valor;
}
console.log(getFactorial(15));

/**-----------------------
 * *       BUCLE WHILE
 *
 *
 *------------------------**/

function factorialWhile(num) {
	let i = 1;
	let valor = 1;

	while (i <= num) {
		valor = valor * i;
		i++;
	}
	return valor;
}

console.log(factorialWhile(4));

/**=======================
 * *      getFactorialByStatement
 *
 *
 *========================**/

function getFactorialByStatement(num) {
	let i = 1;
	let valor = 1;
	while (true) {
		if (i > num) {
			break;
		}
		valor *= i;
		i++;

        // other
        
		// if (i <= 4) {
		//   valor = valor * i;
		//   i++;
		// } else {
		//   break;
		// }
	}
	return valor;
}
console.log(getFactorialByStatement(10));
