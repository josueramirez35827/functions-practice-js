//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.

const students = [
  "Angel",
  "Ayman",
  "David",
  "Diana",
  "Ezra",
  "Jahaziel",
  "Jennifer",
  "Julian",
  "Katherine",
  "Leesel",
  "Naeem",
  "Nashid",
  "Quiana",
  "Shafee",
  "Shan",
  "Stephanie",
  "Tinesha",
  "Zipporah",
];
const course = ["Data", "PWD"]

function liststudents(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]} is in the ${arr2[1]} class.`)
  }
}

liststudents(students, course);





//Exercise #2
//Write a function named calculateDogAge that:
//takes one argument: your puppy's age
//calculates your dog's age based on the conversion rate of
// 1 human year to 7 dog years
//outputs the result to the screen like so:
//"Your dog is something years old in dog years"
//call the function with different sets of values
//Add an additional argument to the function that takes the conversion
//rate of human to dog years

function calcultateDogAge(puppyage, human) {

  let humanage = puppyage / 7;
  let dogage = human * 7
  console.log(`Your dog is ${humanage} years old in human years`);
  console.log(`Your dog is ${dogage} years old in dog years`)

}

calcultateDogAge(25, 7);
calcultateDogAge(16, 41);
calcultateDogAge(4, 90);



//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number

function calculateSupply(goalage, amount) {
  let benchmarkAge = 25;
  let amountConsumed = (amount * 365) * (goalage - benchmarkAge);
  console.log(`You will need ${amountConsumed} to last you until the age of ${goalage}`);
}

calculateSupply(105, 25)

//Exercise #4
//http://math2.org/math/geometry/circles.htm
//
//Create 2 functions that calculate properties of a circle:
//First: Create a function called calcCircumference
// - Pass the radius to the function
// - Calculate the circumference based on the radius
// - and output " The circumference is SOMETHING"
// Second: Create a function called calcArea:
// - Pass the radius to the function
// - Calculate the area based on the radius and output "The area is SOMETHING"

function calcCircumference(radius) {
  let circumference = Math.PI * 2 * radius
  console.log(`The circumference is ${circumference}`)
  let area = Math.PI * (radius * radius);
  console.log(`The area is ${area}`);
}

calcCircumference(10)



//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function celsiusToFahrenheit() {
  let celsius = 35;
  let converted = (celsius * (9 / 5)) + 32;
  console.log(`${celsius} degrees Celsius is ${converted} degrees Fahrenheit`)

};

function fahrenheitToCelsius() {
  let fahrenheit = 26;
  let converted1 = (fahrenheit - 32) * (5 / 9);
  console.log(`${fahrenheit} degrees Fahrenheit is ${converted1} degrees Celsius`)
};

console.log(celsiusToFahrenheit())
console.log(fahrenheitToCelsius())



//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third
//passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function raisedTopow(num1, num2, num3) {
  let multi = num1 * num2;
  let power = Math.pow(multi, num3)
  console.log(`The answer is: ${power}`)
}

raisedTopow(13, 2, 7)


