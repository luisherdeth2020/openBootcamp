/**----------------------------------------------
 * *                   EXERCICE 10
 *
 *
 *
 *
 *---------------------------------------------**/

// - Configura el proyecto para utilizar los módulos de ES6

// Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';

// - En el entrypoint index.js, importa el módulo controller.js
// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
import { sum, multiply } from './controller.js';
// import * as prueba from './controller.js';

const getSum = sum(4, 2);
console.log(chalk.blue(getSum));

// Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
const getMultiply = multiply(2, 2);
console.log(chalk.green(getMultiply));
