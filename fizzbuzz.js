/*
	crear un programa que imprima una lista de numeros, 
	si el número es multiplo de 3 mostrar la palabra fizz,
	si es multiplo de 5 mostrar la palabra buzz y si el 
	número es multiplo de 3 y 5 mostrar la palabra fizzbuzz.
*/

function fizzbuzz(num){

	const divisible = (divisor, num) => num % divisor === 0;

	if(divisible(5, num)  && divisible(3, num)){
		return "fizzbuzz";
	}

	if(divisible(3, num)){
		return "fizz";
	}

	if(divisible(5, num)){
		return "buzz";
	}

	return num;
}


function printNum(num){
	for (let i = 0; i < num; i++) {
		console.log(`${i}: ${fizzbuzz(i)}`);
	}
}

printNum(17);

module.exports = fizzbuzz;



