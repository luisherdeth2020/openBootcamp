/**----------------------------------------------
 * *                   EXERCICE 15
 *
 *
 *
 *
 *---------------------------------------------**/

let name = 'Luis';
let lastname = 'Herdeth';

const data = {
	name: 'Luis',
	lastname: 'Herdeth',
};
// - Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem('dni', JSON.stringify(data));

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem('dni', JSON.stringify(data));

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = `caducidad=${JSON.stringify(data)};max-age=${60 * 60}`;
