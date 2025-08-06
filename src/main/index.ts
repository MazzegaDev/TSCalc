//Aqui habilitamos o uso de prompt
import promptSync from "prompt-sync";
const prompt = promptSync();

function sum(a: number, b: number) {
    console.log(`Your result: ${a + b}`);
}
function sub(a: number, b: number) {
    console.log(`Your result ${a - b}`);
}
function mult(a: number, b: number) {
    console.log(`Your result: ${a * b}`);
}
function div(a:number, b:number){
    console.log(`Your result: ${a / b}`)
}
function isNumber(a: number, b: number) {
    if (isNaN(a) || isNaN(b)) {
        console.log("One of the values is not a valid number");
        return false;
    } else {
        return true;
    }
}
let op: number;
do {
    console.log(`
    ---TypeScript Calculator---
    1 - Sum
    2 - Subtraction
    3 - Multiplication
    4 - division
    0 - exit
    `);
    op = parseInt(prompt("Inform your operation"));

    if (op == 1) {
        let n1: number = parseFloat(prompt("Inform the first number!"));
        let n2: number = parseFloat(prompt("Inform the second number!"));

        let testNumber: boolean = isNumber(n1, n2);
        if (testNumber) {
            sum(n1, n2);
        }
    } else if (op == 2) {
        let n1: number = parseFloat(prompt("Inform the first number!"));
        let n2: number = parseFloat(prompt("Inform the second number!"));
        let testNumber: boolean = isNumber(n1, n2);
        if (testNumber) {
            sub(n1, n2);
        }
    } else if (op == 3) {
        let n1: number = parseFloat(prompt("Inform the first number!"));
        let n2: number = parseFloat(prompt("Inform the second number!"));
        let testNumber: boolean = isNumber(n1, n2);
        if (testNumber) {
            mult(n1, n2);
        }
    } else if (op == 4) {
        let n1: number = parseFloat(prompt("Inform the first number!"));
        let n2: number = parseFloat(prompt("Inform the second number!"));
        let testNumber: boolean = isNumber(n1, n2);
        if (testNumber) {
            div(n1, n2);
        }
    } else if (op == 0) {
        console.log("Ending programn");
    } else {
        console.log("Invalid operation!");
    }
} while (op != 0);
