export class Cliente{ //classe igual a um molde 
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }
    constructor(nome, cpf){//passando atributo reconhecido sem modificaçao do cpf que é privado  
        this.nome = nome;
        this._cpf = cpf

    }
}