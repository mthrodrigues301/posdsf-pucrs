const functions = require("./functions");

// npm test
// npm run testwatch

//-----
beforeAll(() => inicializarTestes());
afterAll(() => finalizarTestes());
const inicializarTestes = () => console.log("Inicializando testes...");
const finalizarTestes = () => console.log("Finalizando testes...");
//-----

test("Dois mais dois devera ser quatro", () => {
  expect(functions.somarDoisValores(2, 2)).toBe(4);
});

test("Deve ser null", () => {
  expect(functions.sempreNulo()).toBeNull();
});

// Códigos validos: 100, 101, 500, 999
// Códigos inválidos: -1, 5, 1000

test("Codigo 100 deve ser permitido", () => {
  expect(functions.codigoValido(100)).toBeTruthy();
});

test("Codigo -1 não deve ser permitido", () => {
  expect(functions.codigoValido(-1)).toBeTruthy();
});

// Escrever o teste primeiro

// Inverter strings
// DANIEL -> LEINAD, ANA -> ANA, JEST -> TSEJ
test("Deve inverter uma string `DANIEL -> LEINAD`", () => {
  expect(functions.inverterString("DANIEL")).toEqual("LEINAD");
});

// Inverter strings
// DANIEL -> LEINAD
// ANA -> ANA
// Jest -> tseJ
const casosInverterStrings = [
  ["DANIEL", "LEINAD"],
  ["ANA", "ANA"],
  ["Jest", "tseJ"],
];

describe("", () => {
  test.each(casosInverterStrings)(
    "inversao de %p -> %p",
    (original, inversaoEsperada) => {
      const resultado = functions.inverterString(original);
      expect(resultado).toEqual(inversaoEsperada);
    }
  );
});

// Não faremos o teste da funcao 'funcaoNaoTestada' -> cobertura de código < 100%

// Teste de chamadas de APIs
// jsonplaceholder.typicode.com

// Promise: dados assincronos (usando uma API de testes)
test("[Promise] Deve carregar o primeiro usuario de teste -> Leanne Graham", () => {
  expect.assertions(1); // por causa da chamada assincrona
  return functions.buscarUsuario1().then((dados) => {
    expect(dados.name).toEqual("Leanne Graham");
  });
});

// Async Await: dados assincronos (usando uma API de testes)
test("[AsyncAwait] Deve carregar o primeiro usuario de teste -> Leanne Graham", async () => {
  expect.assertions(1); // por causa da chamada assincrona
  const dados = await functions.buscarUsuario1();
  expect(dados.name).toEqual("Leanne Graham");
});
