class Cliente{ //classe igual a um molde 
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;

//metodo sacar
    sacar(valor){
        if(this.saldo >= valor){//se o valor do saldo for maior e igual ao valor da conta = pode realizar o saque  
            this.saldo -=valor;//se o valor for menor e igua a valor da conta = nao pode realizar o saque  
        }
    }
}

//objeto usando os moldes da classe, new segnifica a criaçao de uma instancia da classe 
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50) //usando o metodo sacar em uma funçao e adicionando o valor em parentesses 


console.log(cliente1);
console.log(cliente2);