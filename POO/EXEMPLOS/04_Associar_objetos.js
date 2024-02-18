class Nota {
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };

    setGrau(valor) {
        if (valor < 0 || valor > 10) throw new Error();

        this.#grau = valor;
    }

    getGrau() {
        return this.#grau;
    }
};

class Estudante extends Pessoa {
    #matricula
    notas = [];
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

    addNotas(nota) {
        this.notas.push(nota);
    }
}

const aluno = new Estudante(["Matheus", "Rodrigues"], 2000, "312312321");
console.log(aluno);

aluno.notas = [new Nota("OO", 10), new Nota("Algoritmos", 9), new Nota("Cálculo", 8)];

console.log(aluno.notas);

aluno.notas[0].setGrau(9);

console.log(aluno.notas);