console.log('Hello World!!!');

var firstName = 'Mafeezy';
console.log(firstName);

var lastName = 'Smith';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
job = 'Teacher';
console.log(job);

console.log(firstName + ' ' + age);

//Declare many variables in many lines and then define them

var job, isMarried;
job = 'paralegal';
isMarried = 'almost'; 

//variable mutation
age = 'twenty eight';
job = 'clown';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is she married?' + isMarried)

var lastName = prompt('What is her last Name');
console.log(firstName + ' ' +  lastName);

//Basic Operators
var year, yearJohn, yearMark, ageJohn, ageMark;
ageJohn = 28;
ageMark = 33; 

now = 2018;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now *2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

//typeof operator
//will describe the type of the variable
console.log(typeof johnOlder);

console.log(typeof ageJohn);

//Operator Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now -  yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x = y = (3+5) * 4 - 6;
console.log(x,y);

//More Operators
x +=2;
console.log(x);
x+=10;
console.log(x);
//will add one unit to the variable same as
//x+=1 or x=x+1
x++

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
//Their height and mass
var markHeight = 1.75;
var johnHeight = 1.8;

var markMass = markHeight ** 2;
var johnMass = johnHeight ** 2;


