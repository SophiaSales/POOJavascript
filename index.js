class Cliente{ //classe igual a um molde 
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    _saldo = 0; //Saldo passa a ser um valor privado podendo ser acesado só dentro da classe  

//metodo sacar
    sacar(valor){
        if(this._saldo >= valor){//se o valor do saldo for maior e igual ao valor da conta = pode realizar o saque  
            this._saldo -=valor;//se o valor for menor e igua a valor da conta = nao pode realizar o saque  
        }
    }
    depositar(valor){
        if(valor >0){//se valor for maior que 0 = ele pode receber o deposito 
            this._saldo += valor; //se o saldo for maior e igual ao valor ele pode receber o deposito, validaçao para nao receber valor negativo 
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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);//usando o metodo depositar 
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50) //usando o metodo sacar em uma funçao e adicionando o valor em parentesses 

console.log(contaCorrenteRicardo);

