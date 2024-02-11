// Classes, modelos para criar objetos

class Pessoa {
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

const pessoa = new Pessoa();
console.log(pessoa);

// Herança

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante")
        this.matricula = matricula;
    };
}

const aluno1 = new Estudante("Julia", 1999, "23412312");
console.log(aluno1);

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, "Professor")
        this.titulacao = titulacao;
    };
}

const professor1 = new Professor("Marta", 1979, "Mestre");
console.log(professor1);

// Poliformismo

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante")
        this.matricula = matricula;
    };

    ola() {
        super().ola();
        console.log("colegas!");
    }
}