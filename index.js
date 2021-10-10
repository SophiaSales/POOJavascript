import { Cliente } from "./Cliente.js";
import {  ContaCorrente } from "./ContaCorrente.js"

//objeto usando os moldes da classe, new segnifica a criaçao de uma instancia da classe 
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(cliente2, 102);//usando o metodo cliente, setando o cliente em uma conta corrente

contaCorrenteRicardo.tranferir(200, conta2);

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);

//const valorSacado = contaCorrenteRicardo.sacar(50) //usando o metodo sacar em uma funçao e adicionando o valor em parentesses 
// console.log(valorSacado);

// console.log(conta2);
// console.log(contaCorrenteRicardo);

