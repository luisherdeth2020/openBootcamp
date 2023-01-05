/**----------------------------------------------
 * *                   EXERCICE 11
 *   
 *   
 *   
 *
 *---------------------------------------------**/

class Student {
	constructor(name) {
		// Una variable llamada nombre
		this.name=name;
		// Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
		this.subjets = ['Javascript', 'Html', 'Css'];
	}
	// Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
	getData() {
		return this.name, this.subjets;
	}
}
// Crea una nueva instancia de "Estudiante"
const newStudent = new Student();

// Haz la llamada al método obtenDatos
console.log(newStudent.getData());
