const newEmployees = (pessoaContratada) => {
  const employees = {
    id1: pessoaContratada('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: pessoaContratada('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: pessoaContratada('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const pessoaContratada = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName: fullName,
     email: `${email}@trybe.com`};
}

console.log(newEmployees(pessoaContratada));