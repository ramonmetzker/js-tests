/*
Ramon Metzker tem 24 anos, pesa 95 kg
tem 1.75 de altura e seu IMC é de 31.020408163265305
Luiz Otávio nasceu em 1980
*/
const nome = 'Ramon';
const sobrenome = 'Metzker';
const idade = 24;
const peso = 95;
const alturaEmM = 1.75; 
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
