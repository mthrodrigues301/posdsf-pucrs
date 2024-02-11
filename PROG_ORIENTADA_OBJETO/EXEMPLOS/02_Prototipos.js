// Protótipos, são mecanismos de herença entre objetos
// JavaScript é descrita como uma linguagem baseada em protótipos
// Objetos podem ter um objeto de protótipo, modelo que fornece atributos e métodos
// Um objeto de protótipo pode ter outro objeto (e assim por diante), é chamada de cadeia de protótipos

function Pessoa() {
    this.name = ["Fulano", "de Tal"];
    this.anoDeNascimento = 1990;
    this.profissao = "Estudante";
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa = new Pessoa();
console.log(pessoa.valueOf());

console.log(Object.getPrototypeOf(pessoa));

const pessoa2 = Object.create(pessoa);

console.log(Object.getPrototypeOf(pessoa2));

// Função descobre tipo

function descobreTipo(obj) {
    if ('Object' == obj.constructor.name) {
        console.log("é um objeto raiz");
    } else {
        console.log("é um objeto do tipo " + obj.constructor.name);
    }
}

// Herança Prototipada

function Pessoa(nome, anoDeNascimento, profissao) {
    this.name = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa3 = new Pessoa(["Fulano", "de Tal"], 1990, "Estudante");
console.log(pessoa3);

Pessoa.prototype.saudar = function () {
    console.log("Olá");
};

console.log(pessoa3);