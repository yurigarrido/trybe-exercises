let estados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

let opcoesDeEstado = ['AC', 'AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

let select = document.querySelector('#estado');

for (let index = 0; index < estados.length; index += 1) {
  let estado = document.createElement('option');
  select.appendChild(estado);
  estado.innerHTML = estados[index];
  estado.value = opcoesDeEstado[index];
  estado.classList.add('form-select');
  
}


// PARTE 02
// Validação da data de início

let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');

let botao = document.getElementById('botao');
botao.addEventListener('click', function () {

  // console.log(botao);
  if (dia.value == null || dia.value <= 0 || dia.value > 31) {
    alert('dia inválido');
  }
  if (mes.value <= 0 || mes.value > 12) {
    alert('mês inválido');
  }
  if (ano.value < 0 ) {
    alert('ano inválido');
  }
} 
);

/* parte 03 */
let divValido = document.getElementById('valido');
let criaP = 

function criaDiv(){
  let nome = document.getElementById('input-nome');
  if(nome.value.length > 0 && nome.value.length <= 40 ){
    divValido.appendChild('p').innerText = nome.value;
  }
}
criaDiv();