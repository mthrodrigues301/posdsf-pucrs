// Função do tipo construtor que cria pessoas

function Pessoa() {
    this.name = ["Fulano", "de Tal"];
    this.anoDeNascimento = 1990;
    this.profissao = "Estudante";
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }; 
};

const pessoa = new Pessoa();
console.log(pessoa);

// Função do tipo construtor com parametros que cria pessoas customizaveis

function Pessoa(nome, anoDeNascimento, profissao) {
    this.name = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }; 
};

const pessoa2 = new Pessoa("Maria", 2016, "Estudante");
console.log(pessoa2);

// Função do tipo construtor Object()

const pessoa3 = new Object();
console.log(pessoa3);

pessoa3.nome = "Matheus";
pessoa3["anoDeNascimento"] = 2000;
pessoa3.profissao = "Analista de Sistemas PL";
pessoa3.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
};

console.log(pessoa3);