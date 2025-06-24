// In-built functions || predefined functions
// alert('Hello world')
// prompt('What is your Name?')
// confirm('are you sure you want to make this transaction')

// console.log('welcome to javascript')

// variables
// var
// let age = 30
// age = 25
// console.log(age);


// const age = 30
// console.log(age);

// Data types
// Primitive
// String
// let name = 'John Doe'
// console.log(name)


// Number
// let age = 31
// console.log(age)


// Boolean
// let isMarried = true
// console.log(isMarried);


// null
// let userInfo = null
// console.log(userInfo);


// Undefined
// let date;
// console.log(date);

// Non-primitive Data types
// Data data type 
// let day = new Date().getDay()
// let month = new Date().toLocaleDateString('default', { month : 'long'})
// let year = new Date().getFullYear()
// console.log(day, month, year)
// console.log(hour);

// function data type
// function login(email, password){

//     console.log('Your email(' + email + ')' + 'and password(' + password + ') are correct');

// }
// login('john@gmail.com', 12345)

// function addNum(a, b){
//     console.log(a + b);
// }
// addNum(15, 10)

// Function expression
// const addNum = function(a, b){
//     console.log(a + b);   
// }
// addNum(9, 7)

// Array data type
// length     1    2      3     4
// let array1 = [10, 'Jane', true, null]
// index      0,   1,     2,    3
// console.log(array1.length);
// console.log(array1[2]);

// let colours = ['white', 'blue', 'red', 'orange']

// colours.pop()
// console.log(colours);
// colours.push('grey')
// console.log(colours)
// colours.shift()
// console.log(colours);
// colours.unshift('voilet')
// console.log(colours);

// Object Data type
// const person = {
//     name: 'Jenny',
//     age: 25,
//     isStudent: true,
//     certificate: null
// }
// console.log(person['isStudent'], person.name);


// const properties = [
//     'shoes',
//     cars=['lamborghini', 'porshe', benz=['AMG', 'GLE', 'GLK'], 'Toyota'],
//     companies=['TechHub', 'school', 'saloon', factories=['salt', 'cement', 
//     'floor', 'sugar',], 'restaurant'], 
//     house=['Penthouse', 'bungalow', 'duplex', multiStorey=['4', '3', '5']]
// ]

// console.log(benz[2], 
//     factories[3], 
//     companies[4], 
//     multiStorey[1]
// )

// another method
// console.log(properties[1][2][2], properties[2][3][3], properties[2][4],
//     properties[3][3][1]
// );

// const person = {
//     name: 'Jane',
//     age: 25,
//     isStudent: 'true',
//     religion: 'Christian',
//     country: 'Armenia',
//     profession: {
//         title: 'SE',
//         company: 'Google',
//         mode: 'Remote',
//         level: 'Tier 1',
//         jobDesc: {
//             started: '2023/07/12',
//             endDate: 'currently works here',
//             qualifications: 'ISQBT'
//         }
//     }
// }

// console.log(
//     person.country, 
//     person.profession.company, 
//     person.profession.jobDesc.qualifications
// );

// Array of objects
// const players = [
//     {
//         id: 1,
//         name: 'Lionel Messi',
//         country: 'Argentina',
//         club: 'Inter Miami'
//     },
//     {
//         id: 2,
//         name: 'Cristiano Ronaldo',
//         country: 'Portugal',
//         club: 'Al Nassr'
//     },
//     {
//         id: 3,
//         name: 'Luka Modric',
//         country: 'Croatia',
//         club: 'Real Madrid'
//     },
//     {
//         id: 4,
//         name: 'Angel Di Maria',
//         country: 'Argentina',
//         club: 'Benfica'
//     }
// ]

// console.log(players[0].name, players[0].club);
// console.log( players[2].name, players[2].club);

// Object of Arrays
// const things = {
//     colours: ['white', 'black', 'orange', 'purple'],
//     cars: ['Toyota', 'Audi', 'Nissan', 'Honda'],
//     fruits: ['Apples', 'Banana', 'Mango', 'Berries']
// }
// console.log(things.colours[1], things.cars[3], things.fruits[2]);


// Arithmetric operators
// console.log(5 + 7);
// console.log(15 - 7);
// console.log(12 * 2);
// console.log(10 % 3);
// console.log(9 % 2); //modulus operator
// console.log(5 ** 4); // exponential operator


// Shorthand operators
// let total = 0
// let price = 50
// total += price
// console.log(total);


// Assignment operator
// let x = 10


// comparison operators
// console.log(5 == '5');
// console.log(5 != 8);
// console.log(7 === 9);
// console.log(8 !== 8);
// console.log(10 > 5);
// console.log(7 < 3);
// console.log(3 >= 8);
// console.log(5 <= 9);


// logical operators
// And operators
// let x = 10
// let y = 1
// console.log(x == 5 && y > 3);

// or operator
// console.log(x >= 5 || y > 3);


// string opertors
// string concatenation
// let school = 'Gomycode'
// let address = '230 Herbert Marcaulay way'
// let direction = 'I attend ' + school + ' at ' + address
// console.log(direction);

// Template literal
// let navi = `I attend ${school} at ${address}`
// console.log(navi);




// conditional statements
// if statement
// let name = 'jenny'
// if(name == 'james'){
//     console.log(`My name is ${name}`);
// }else if(name == 'Micky'){
//     console.log(`My name is ${name}`);

// }
// else if(name == 'Jane'){
//     console.log(`My name is ${name}`);

// }
// else{
//     console.log('name does not match.');

// }

// switch statement
// function decodeColour(){
//     let colour = prompt('Choose a colour')
//     switch(colour){
//         case 'white': alert('You chose white');
//         break
//         case 'black': alert('You chose black');
//         break
//         case 'blue': alert('You chose blue');
//         break
//         case 'green': alert('You chose green');
//         break
//         default:
//             alert('You choose an invalid colour');
//     }
// }
// decodeColour()

// Ternary operator
// let marks = prompt('Enter your score');
// let results = (marks >= 41) ? 'Pass' : 'Fail'
// alert(results)

// Chained Ternary opertor
// let score = 30
// let result = (score < 40) ? 'You failed' : (score > 40 && score <= 75) ? 
// 'You passed' : (score > 70 && score <= 100) ? 'You did extremely well' : 
// 'You did not write the exam'
// console.log(result);


// Increment ++
// let number = 5
// number++
// console.log(number);


// decrement
// let numbers = 5
// numbers--
// console.log(numbers);


// Iteration
// Loops
// While loop
// let num = [3, 5, 8, 2]
// let sum = 0
// let i = 0
// while (i < num.length) {
//     sum += num[i]
//     i++
// }
// console.log(sum);

// Do-While loop
// let num = [3, 5, 8, 2]
// let sum = 0
// let i = 0
// do{
//     sum += num[i]
//     i++
// }while (i > num.length)
// console.log(sum);


// For loop
// let num = [3, 5, 8, 2]
// let sum = 0
// for (let i = 0; i < num.length; i++){
//     sum += num[i]
// }
// console.log(sum);


// 1: Write a function that converts the current date to a format like: "2nd June 2025".
//  2: Given an array of scores [45, 78, 80, 66, 90], write a function to calculate the average score and determine if it's a pass (≥ 50).      : Prompt a user for their name and the current time, then output a personalized greeting such as "Good evening, Sarah!"    3: Write a loop that prints numbers from 1 to 50.

// If the number is divisible by 3, print "Fizz".

// If divisible by 5, print "Buzz".

// If divisible by both, print "FizzBuzz".      4: Problem: Write an if...else if...else block that checks a person's age and prints:

// "Child" if < 13

// "Teenager" if < 20

// "Adult" otherwise


// QUESTION 1
// let scores = [45, 78, 80, 66, 90]
// let sum = 0
// function average(){
//     for (let i = 0; i< scores.length; i++) {
//      const element = scores[i];
      
//     }
//     let avg = sum / scores.length
//     let pass = (avg >= 50) ? ' You Pass' : 'You Fail'
//     console.log(pass);
// }
// average()


// QUESTION 2
// let day = new Date().getDate()
// let suffix = (n => (n >= 11 && n <= 13) ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th')(day);
// let month = new Date().toLocaleDateString('default', { month : 'long'})
// let year = new Date().getFullYear()
// console.log(`${day}${suffix} ${month} ${year}`)


// QUESTION 3
// const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout }); 

// readline.question("What's your name? ", name => {
//   readline.question("What hour is it (0–23)? ", h => {
//     let greet = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : h < 21 ? "Good evening" : "Good night";
//     console.log(`${greet}, ${name}!`);

//     let scores = [45, 78, 80, 66, 90];
//     let avg = scores.reduce((a, b) => a + b) / scores.length;
//     console.log(`Average: ${avg.toFixed(2)} (${avg >= 50 ? "Pass" : "Fail"})`);

//     readline.close();
//   });
// });


// function greeting(){
//     let name = prompt('Enter Your Name')
//     let time = newDate().gethours()
//     if(time < 12){
//         alert(`Good morning ${name}`)
//     }else if(time >= 12 && time <= 18){
//         alert(`Good Evening`)
//     }else{
//         alert(`Good Night`)
//     }
// }
// greeting()

function greet(name) {
    return `Hello, ${name}`;
  }
  
  console.log(greet("Jenny")); // Output: Hello, Jenny
  