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
