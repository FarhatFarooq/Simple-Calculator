#! /usr/bin/env node

import inquirer from "inquirer";

// Printing Welcome Message
console.log("\n\tWelcome To \`farhat-farooq`\ -CLI Simple Calculator\n");

// Asking Question from Users through Inquirer

const answers = await inquirer.prompt([
    {message: "Enter First number", type: "number", name: "firstNumber"},
    {message: "Enter Second number", type: "number", name: "secondNumber"},
    {messages: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);
 
// Conditional Statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}