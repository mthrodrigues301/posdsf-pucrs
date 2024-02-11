// Atributo estatico, são compartilhados

class ValidadorCPF {
    static TAMANHO_CPF = 11;
    static validar(tamanho) {
        return tamanho == this.TAMANHO_CPF;
    }
}

console.log(ValidadorCPF.validar("321312312321"));
console.log(ValidadorCPF.TAMANHO_CPF);

class Pessoa {
    static NOME_CLASSE = "PESSOA";
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    ola() {
        console.log("Olá, eu sou " + nome);
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}

console.log(Pessoa.NOME_CLASSE);
