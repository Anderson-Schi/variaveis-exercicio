// comentario em linha

/* comentario 
                em 
                            bloco */

console.log ("HELLO !");


const nome = prompt ("Digite seu nome ?");
const nasc = prompt ("Digite sua data de nascimento (dd/mm/aaaa)");
const end = prompt ("Digite seu endereco");
const cpf = prompt ("Digite seu CPF");
const esco = prompt ("Informe seu grau de escolaridade");
const cnh = prompt ("Digite sua CNH");
let filhos = Number(prompt ("Quantos filhos possui")) ;
let cargo = prompt ("Qual seu cargo atual ?");
let salario = Number(prompt ("Informe o valor do seu salario atual ?"));
let comi = Number(prompt ("Informe sua porcentagem de comissao se receber ou digite 0 ?"));
const admi = prompt ("Informe o ano de admissao ?");

console.log(typeof nome);
console.log(typeof nasc);
console.log(typeof end);
console.log(typeof cpf);
console.log(typeof esco);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargo);
console.log(typeof salario);
console.log(typeof comi);
console.log(typeof admi);

console.log(`Relatorio do funcionario ${nome}`, `, Data de nascimento: ${nasc}`);
console.log(`Endereco: ${end}`,`, Portador do CPF: ${cpf}`,`, Grau de escolaridade: ${esco}`);
console.log(`Portador da CNH: ${cnh}`,`, Possui ${filhos} filhos`, `, Atualmente trabalha como ${cargo}`);
console.log(`Salario atual R$${salario}`,`, Recebe ${comi}% de comissao`, `, Foi admitido no ano de ${admi}`);


