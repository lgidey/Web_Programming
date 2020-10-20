


function isFactor(value, possible_factor){
	if (value%possible_factor === 0) {
		return true;
	}
	else{
		return false;
	}
}


//test
// function Test(){
// 	if (isFactor(220, 4)){
// 		alert(`4 is a factor of 220`);
// 	}

// 	else{
// 		alert("4 is not a factor of 220");
// 	}
// }

function showArray(array){
	// for (i = 0; i < array.length; i++){
	// 	document.write(array[i]);
	// }
	document.addEventListener('DOMContentLoaded', function(){
	
		document.querySelector('h2').innerHTML = array;
			

		
});

}

//testing showArray()
// var array = [1, 2, 3, 4, 5];
// showArray(array);

function addArray(array){
	total = 0;
	for (i = 0; i < array.length-1; i++){
		total+=array[i];
	}
	return total;
}

//testing addArray()
// var array = [1, 2, 3, 4, 5, 6];
// total = addArray(array);
// document.write(total);


function getFactors(number){

	var factors = [];

	for (i =1; i <= number; i++){
		if (isFactor(number, i)){
			factors.push(i); 
		}
	}
	return factors;

}



//Testing getFactors()

// var num = 220;
// array = getFactors(num);
// document.write(array);
//output = 1,2,4,5,10,11,20,22,44,55,110, 220

//testing if sum of 220 factors(except) == to 284
// var array = getFactors(220);
// total = addArray(array);
// document.write(total);


//event handling

//helper function

function GetFactorsAndAdd(number){
		array = getFactors(number);
		total = addArray(array);
		return total;

}

//test helper function 
// var num = 284;
// var sum = GetFactorsAndAdd(num);
// document.write(sum);


document.addEventListener('DOMContentLoaded', function(){
		document.querySelector('form').onsubmit = function(){
			const num1 = document.querySelector('#number1').value;
			const num2 = document.querySelector('#number2').value;
			// var show = `You entered ${num1} and ${num2}`;
			// document.querySelector('h2').innerHTML = num1;
			if (GetFactorsAndAdd(num1) == num2 && GetFactorsAndAdd(num2)==num1){
				  document.write(`${num1} and ${num2} are amicable!`);
			}
			else{
				document.write(`${num1} and ${num2} are NOT amicable!`);
			}
			

		};
});

