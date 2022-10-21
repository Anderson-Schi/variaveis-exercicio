const nome = prompt ("Qual seu nome ?"); 
let idade = prompt ("Qual sua idade ?");

console.log (typeof(nome, idade)); /* esse tipo undefined foi impresso pois nao foi atribuido nem um valor a variavel */ 
                                   /*agora atribuidos os valores as variaveis mudaram o tipo para string */


/*console.log(`Seu nome e: ${nome}` , `Sua idade e: ${idade} `);*/
window.alert (`Seu nome e: ${nome} e Sua idade e: ${idade} `)


