/**-----------------------
 * *       EXERCICE4
 *
 *
 *------------------------**/

const name = 'Luis Herdeth';
const lastname = 'Mendoza Vidarte';
const student = name + ' ' + lastname;
// const student = `${name} ${lastname}`
const studentUppercase = student.toUpperCase();
const studentLowerCase = student.toLowerCase();
const getStudent = student.length;
const FirstCaracterName = name.charAt(0);
const FirstCaracterLastname = lastname.charAt(lastname.length - 1);
// const FirstCaracterLastname = lastname.slice(-1)
const deleteSpace = student.replace(/ /g, '');
const itsBooelean = student.includes(name);
