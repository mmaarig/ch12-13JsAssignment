// Question 1
// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

function qOne(){
    let character = prompt("Enter character");

if (character == "" || character == null || character == " " || character == "  " || character == "   " || character == "    " || character == "     ") {
    alert("Empty String");
}
else if (!isNaN(character)) {
 alert ('This is a Number');
}
else if (character == character.toUpperCase()) {
 alert ('This is Upper Case');
}
else if (character == character.toLowerCase()){
 alert ('This is Lower Case');
}
else {
 alert ('Please enter an Alphabet or a Number');
}
}


// Question 2
// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
function qTwo(){
    let num1 = Number(prompt(`Please enter first number`));
    let num2 = Number(prompt(`Please enter second number`));
    if (num1 > num2) {
        alert(`${num1} is greater than ${num2}`);
    }
    else if (num1 < num2) {
        alert(`${num2} is greater than ${num1}`);
    }
    else {
        alert(`${num1} and ${num2} are equal`);
    }
}

// Question 3
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.
function qThree(){
    let number = prompt(`Please enter a number`);
    if (number > 0) {
        alert(`${number} is positive`);
    }
    else if (number < 0) {
        alert(`${number} is negative`);
    }
    else {
        alert(`${number} is zero`);
    }
}


// Question 4
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.
function qFour(){
    let character = prompt(`Please enter a Lower case character to check if it is a vowel`);
    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        alert(`${character} is a vowel`);
    }
    else {
        alert(`${character} is not a vowel`);
    }
}


// Question 5
// Write a program that store correct password in a variable. Ask user to enter a password. If user enters the correct password, show "Correct". Otherwise, show "Incorrect".
function qFive(){
    let password = "12345";
    let userInput = prompt(`Please enter password`);
    if (userInput === password) {
        alert(`Correct Password`);
    }
    else {
        alert(`Incorrect Password`);
    }
}

// Question 6
// This if / else statement does not work. Try to fix it.
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
function qSix(){
    let hour = parseInt(prompt(`Enter Hour`));
    if (hour < 18) {
        alert(`Good Day`);
    }
    else {
        alert(`Good Evening`);
    }   
}


// Question 7
// Write a program that takes a time as input from user in 24 hours clock format like 1900 = 7pm. Implement the function to convert time to 12 hours clock format like 19:00.
function qSeven(){
    let hour = prompt(`Enter time in 24 hours clock format like 1900 = 7pm`);
    if (hour >= 0000 && hour < 1200) {
        alert(`Good Morning`);
    }
    else if (hour >= 1200 && hour < 1700) {
        alert(`Good Afternoon`);
    }
    else if (hour >= 1700 && hour < 2100) {
        alert(`Good Evening`);
    }
    else if (hour >= 2100 && hour <= 2400) {
        alert(`Good Night`);
    }
    else {
        alert(`Invalid Time`);
    }
}