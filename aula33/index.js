const pessoa = {
  nome: "Ramon",
  sobrenome: "Metzker",
  idade: 24,
  endereco: {
    rua: "Av Efigenio Salles",
    numero: 780,
  },
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
