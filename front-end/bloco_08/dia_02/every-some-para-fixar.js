const names = ['Mateus', 'José', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
return names.some((nome) => arr.includes(name))
}

console.log(hasName(names, 'Ana'))

//==== QUESTÃO 2

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => people.every(({age}) => age >= minimumAge)

console.log(verifyAges(people, 18));