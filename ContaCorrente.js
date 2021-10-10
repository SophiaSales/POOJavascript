export class ContaCorrente{
    agencia;
    cliente;
    _saldo = 0; //Saldo passa a ser um valor privado podendo ser acesado só dentro da classe  

//metodo sacar
    sacar(valor){
        if(this._saldo >= valor){//se o valor do saldo for maior e igual ao valor da conta = pode realizar o saque  
            this._saldo -=valor;//se o valor for menor e igua a valor da conta = nao pode realizar o saque  
        return valor; //retornando o valor atual depois que é sacado 
        }
    }

//metodo depositar
    depositar(valor){
        if(valor <= 0){//se valor do deposito for menor igual a 0 ele retorna o valor  
            return;
        }
        this._saldo += valor; //se o saldo for maior e igual ao valor ele pode receber o deposito, validaçao para nao receber valor negativo 
    }

//metodo transferencia
    tranferir(valor, conta){
        const valorSacado = this.sacar(valor)//sacar valor recebido e guardar esse valor na variavel valorSacado
        conta.depositar(valorSacado)// deposita o valorSacado na conta adicionada
    }
}