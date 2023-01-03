/**----------------------------------------------
 * *                   LISTAS
 *
 *
 *
 *
 *---------------------------------------------**/

const listBuy       = ['rice', 'sugar', 'bread', 'avocado', 'cheese'];
const addListBuy    = listBuy.push('Aceite de Girasol');
const deleteListBuy = listBuy.pop();
const favoriteList  = [
	{
		title  : 'Bumblebee',
		manager: 'Travis Knight',
		date   : new Date('2018,12,21'),
	},
	{
		title  : 'Guardians of the Galaxy',
		manager: 'James Gunn',
		date   : new Date('2014,08,14'),
	},
	{
		title  : 'Transformers ',
		manager: 'Steven Caple Jr, Travis Knight, Michael Bay',
		date   : new Date('2007,25,03'),
	},
];
const later    = favoriteList.filter((obj) => obj.date > 2010);
const managers = favoriteList.map((name) => name.manager);

const movies = favoriteList.map((movie) => movie.title);

const listManagerTitle1 = managers.concat(movies);
console.log(listManagerTitle1);

const listManagerTitle2 = [...managers, ...movies];
console.log(listManagerTitle2);
