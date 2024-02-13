// Referencia, ambos apontam para o mesmo local de memoria, alterando um valor, alteram ambos os valores

function criarPessoa() {
    return {
        nome: "Matheus",
        anoDeNascimento: 2000,
        profissao: "Analista de Sistemas"
    }
}

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;
pessoa2.anoDeNascimento = 1999;
console.log(pessoa1);
console.log(pessoa2);

// Adiciona, modifica e exclui propriedades

const pessoa3 = criarPessoa();
pessoa3.cidadeNascimento = "Campinas";
console.log(pessoa3);
pessoa3.cidadeNascimento = "São Paulo";
console.log(pessoa3);
delete pessoa3.cidadeNascimento;
console.log(pessoa3);

// Adiciona propriedades no Protótipo

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

Pessoa.prototype.CDF = "Favor completar com o seu";