// 03b_const.js

function testConst() {
    const const01 = { propriedade: "valor" };
    console.log("01a." + const01.propriedade);

    const01.propriedade = "novo valor"; // é permitido, pois pode-se alterar as propriedades de um objeto
    console.log("02a." + const01.propriedade);
}

testConst();