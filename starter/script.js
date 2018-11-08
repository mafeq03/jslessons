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

var markMass = 80;
var johnMass = 90;

//BMI (weight in kg)/(height**2 in meters)

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi){
  console.log('Mark\'s BMI is higher than John\'.s');
}else{
  console.log('John\'s BMI is higher than Marl\'s.');
}
// console.log(markBmi);
// console.log(johnBmi);I = BMIMark > BMIJohn;

//If/Else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName + 'is married');
} else{
  console.log(firstName + 'will hopefully marry soon :)');
}  

var isMarried = true;
if (isMarried){
  console.log(firstName + 'is married');
  }else {
    console.log(firstName + 'will hopefully marry soon :)')
  }

//Boolean logic//
var firstName = 'Eric';
var age = 18;

if (age < 13){
  console.log(firstName + 'is a boy.');
  } else if(age >= 13 && age < 20){
  console.log (firstName + 'is a teenager.');
  }else if(age >= 20 && age < 30){
    console.log (firstName + 'is a young man.');
    }
   else {
  console.log(firstName + 'is a man');
  }

  //The ternary Operator
  
  var firstName = 'Lenny';
  var age = 16;

  //condition + the if block + else block
  age >= 18 ? console.log(firstName + ' drinks beer.') :console.log(firstName + ' drinks juice.');

  var age = 22;

  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  //The Switch Statement
  var teachName = 'Jenny';
  var job = 'teacher';

  switch (job){
    case 'teacher':
    console.log( teachName + ' teaches kids how to code.');
    break;
    case 'driver':
    console.log( teachName + ' drives an uber in Lisbon')
    break;
    case 'designer':
    console.log( teachName + ' designs beautiful websites.');
    break;
    default: 
    console.log( teachName + ' teaches kids how to code.');
  }

var firstName = 'Eric';
var age = 18;

  switch(true){
    case age < 13:
      console.log(firstName + 'is a boy.');
      break;
    case age >= 13 && age <20:
      console.log (firstName + 'is a teenager.');
      break;
    case age >= 20 && age <30:
      console.log (firstName + 'is a young man.');
      break;
    default:
    console.log(firstName + 'is a man');

  }

//Truthy and Falsy values
//falsy values: undefined, null,0,'', NaN
//truthy values: Not falsy values

var height;
height = 23;
if(height || height ===0){
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined');
}

//Equality Operations
if (height == '23'){
  console.log('The == operator does type coercion');
}
//JS turns '23' - string to a number for comparisson

//Always use === to avoid issues
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 
120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there 
might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
Like before, log the average winner to the console. HINT: you will need the && operator to take 
the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var scoreJohn = (89+120+103)/3;
var scoreMike = (116 +94 +123)/3;

if (scoreJohn > scoreMike) {
  console.log ("John's score is " + scoreJohn + "and he is the winner");
}else{
  console.log("Mike's score is " + scoreMike + " and he is the winner");
}

var scoreMary = (97+134+105)/3;

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
  console.lof ("John's score is " + scoreJohn + "and he is the winner");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary){
  console.log("Mike's score is " + scoreMike + " and he is the winner");
} else{
  console.log("Mary's score is " + scoreMary + " and she is the winner");
}

//Functions
function calculateAge(birthYear){
  return 2018 - birthYear;
}

var ageJohn = calculateAge (1990);
var ageMary = calculateAge(1982);
var ageAnegela = calculateAge (1986);
console.log(ageJohn, ageMary, ageAnegela);


function retireTime (year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log( firstName +" has " + retirement + " years left of work :<!");
}