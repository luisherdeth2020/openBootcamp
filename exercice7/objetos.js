const personalInformation = {
	name             : 'Luis Herdeth',
	lastname         : 'Mendoza Vidarte',
	age              : 32,
	height           : 1.7,
	youAreDevelopment: false,
};

const myAge = 'age';
console.log(personalInformation[myAge]);

const newList = [];

newList.push(
	personalInformation,
	{
		friend1: 'Jose Maria',
		age    : 25,
	},
	{ friend2: 'Vicky Mora', age: 13 }
);

newList.sort((a, b) => a.age - b.age);
