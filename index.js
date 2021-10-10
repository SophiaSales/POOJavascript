class Cliente{ //classe igual a um molde 
    nome;
    cpf;
    agencia;
    saldo;
}
//objeto usando os moldes da classe, new segnifica a criaçao de uma instancia da classe 
const cliente1 = new Cliente() 
const cliente2 = new Cliente()


cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;


const cliente3Nome = "Alice";
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3ASaldo = 0;

console.log(cliente1, cliente2);