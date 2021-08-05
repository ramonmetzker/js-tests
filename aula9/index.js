// String, number, undefined, null, boolean
const nome = "Ramon"; // string
const nome1 = "Ramon"; // string
const nome2 = "Ramon"; // string
const num1 = 21; // number
const num2 = 18.32; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
