import { Cliente } from "./Cliente.js";
import {  ContaCorrente } from "./ContaCorrente.js"

//objeto usando os moldes da classe, new segnifica a criaçao de uma instancia da classe 
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100);//usando o metodo depositar 
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50) //usando o metodo sacar em uma funçao e adicionando o valor em parentesses 

console.log(valorSacado);

console.log(contaCorrenteRicardo);

