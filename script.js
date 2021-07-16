/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);



let age = 30;
age = 31;
const birthYear = 1985;
//birthYear = 1990;
*/
/*
//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; // 15
x += 10; //x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10; x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/
//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

*/

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

console.log(markMass);
console.log(markHeight);
console.log(johnMass);
console.log(johnHeight);

const markBmi = markMass / markHeight ** 2;
console.log(markBmi);
const johnBmi = johnMass / johnHeight ** 2;
console.log(johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} year old ${job}!`;
console.log(jonasNew);

console.log(`String
multiple
lines`);

*/

/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah still has ${yearsLeft} years until she can drive`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

*/

//CODING CHALLENGE #2

/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;

const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is higher than John's BMI ${johnBmi}.`);
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's BMI ${markBmi}.`);

}
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//typer coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 65;
if (height) {
    console.log(`Yay, height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}

*/

/*
const age = 18;
if (age === 18) console.log(`You just became an adult.`);
//=== is the strict equality operator, it does not do type coercion

console.log('18' == 18);
console.log(`18` === 18);

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 13) {
    console.log(`Cool! 13 is the best number!`)
} else if (favourite === 7) {
    console.log(`7 is not a cool number`);
} else {
    console.log(`Number is neither 13 or 7`);
}

if (favourite !== 13) console.log(`Why not 13?`);
*/

/*
const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive`);
}

*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

*/

/*
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Doplhins win!`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`Koalas win!`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`There is a tie`);
} else {
    console.log(`Neither team scored enough points`);
}
*/

//const day = 'monday';
/*
switch (day) {
    case 'monday': // day === 'monday
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend `);
        break;
    default:
        console.log(`Not a valid day.`)

}
*/

/*
if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend `);
} else {
    console.log(`Not a valid day.`)
}
*/

//expressions
/*
3 + 4
1991
true && false && !false

//statement
if (23 > 10) {
    const str = `23 is bigger`;
}
const me = `Jonas`;
console.log(`I'm ${2037 - 1991} years old ${me}.`)
*/

/*
const age = 23;
age >= 18 ? console.log(`I like to drink beer 🍺`) : console.log(`I like to drink water 💦`);

const drink = age >= 18 ? `beer 🍺` : `water 💦`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `beer 🍺`;
} else {
    drink2 = `water 💦`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `beer 🍺` : `water 💦`}`);

*/

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
const total = bill + tip;
console.log(bill);
console.log(tip);
console.log(total);
console.log(`The bill was ${bill} dollars and the tip was ${tip} dollars for a total of ${total} dollars`)
*/