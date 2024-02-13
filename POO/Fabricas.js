// Função que cria pessoas

function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function () {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    }
}

const pessoa = criarPessoa("Fulano", 1990, "Estudante");
console.log(pessoa);