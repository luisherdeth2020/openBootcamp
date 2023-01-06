/**-----------------------
 * *       EXERCICE 13
 *
 *
 *------------------------**/

const name = "Luis Herdeth";
const lastname = "Mendoza";
const lastname2 = "Vidarte";
const student = name + " " + lastname;
// const student = `${name} ${lastname}`
const studentUppercase = student.toUpperCase();
const studentLowerCase = student.toLowerCase();
const getStudent = student.length;
const FirstCaracterName = name.charAt(0);
const FirstCaracterLastname = lastname.charAt(lastname.length - 1);
// const FirstCaracterLastname = lastname.slice(-1)
const deleteSpace = student.replace(/ /g, "");
const itsBooelean = student.includes(name);

// Crea un nuevo proyecto de Node

// - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

// - Duplica el archivo del ejercicio de la sesión 04-Textos

// - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

// - Crea el fichero .eslintrc.json

// - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

/*"parserOptions": {
		"ecmaVersion": "latest"
	},
*/


// - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

/* "rules": {
 		"quotes": ["error", "double"]
	}*/

// - Crea un script en el package.json para corregir automáticamente todos los errores

//* "lint-fix":"eslint --fix .",

// - Ejecuta el script a través del terminal

//* npm run lint-fix
