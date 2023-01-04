/**----------------------------------------------
 * *                   DATES
 *
 *
 *
 *
 *---------------------------------------------**/

// La fecha de hoy
const date = new Date();

// La fecha de tu nacimiento
const birth = new Date('1990,03,25');

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const verification = date > birth;

// Una variable que contenga el día de tu nacimiento
const dateBirth = birth.getDate();

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthBirth = birth.getMonth() + 1;

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearBirth = birth.getFullYear();
