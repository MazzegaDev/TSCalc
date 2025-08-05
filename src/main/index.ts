//Aqui habilitamos o uso de prompt
import promptSync from "prompt-sync";
const prompt = promptSync();

function sum(a: number, b: number) {
    console.log(`Your result: ${a + b}`);
}
function sub(a: number, b: number) {
    console.log(`Your result ${a - b}`);
}

let op: number;
do {
    console.log(`
    ---TypeScript Calculator---
    1 - Sum
    2 - Subtraction
    0 - exit
    `);
    op = parseInt(prompt("Inform your operation"));

    if (op == 1) {
        let n1: number = parseInt(prompt("Inform the first number!"));
        let n2: number = parseInt(prompt("Inform the second number!"));
        if (isNaN(n1) || isNaN(n2)) {
            console.log("One of the values is not a valid number");
        } else {
            sum(n1, n2);
        }
    }
    if (op == 2) {
        let n1: number = parseInt(prompt("Inform the first number!"));
        let n2: number = parseInt(prompt("Inform the second number!"));
        if (isNaN(n1) || isNaN(n2)) {
            console.log("One of the values is not a valid number");
        } else {
            sub(n1, n2);
        }
    }
    if (op == 0) {
        console.log("bye");
    }
} while (op != 0);
