// Variaveis locais

function Pessoa() {
    let nome = ["Matheus", "Rodrigues"];
    let anoDeNascimento = 2000;
    let profissao = "Analista de Sistemas";
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa = new Pessoa();
console.log(pessoa);

function Estagiario(numeroContrato) {
    let nmrContrato = numeroContrato;
}

class Estudante extends Pessoa {
    #matricula
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante")
        this.#matricula = matricula;
        this.#ola();
    };

    #ola() {
        super.ola();
        console.log(" colega!")
    }

    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        this.#matricula = matricula;
    }
}

const aluno = new Estudante(["Matheus", "Rodrigues"], 2000, "312312321");
console.log(aluno);

const aluno2 = new Estudante(["João", "Rodrigues"], 2000, { numero: 312312321, modalidade: "Regular" });
console.log(aluno2);

// Se o método retorne um objeto, eu posso alterar

let matriculaDoAluno2 = aluno2.getMatricula();
matriculaDoAluno1.modalidade = "BUSTED";
console.log(aluno2);