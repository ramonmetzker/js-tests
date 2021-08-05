/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
  nome: "Ramon",
  sobrenome: "Metzker",
};
const b = a;

b.nome = "José";
console.log(a);
console.log(b);
