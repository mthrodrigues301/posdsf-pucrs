// 05f_arrayFilterMapForEach.js

array = [4, 5, 6, 7, 8, 9, 10];

nmrDivisores = (item) => {
    let ndiv = 0;
    for (let div = 1; div <= item; div++)
        if ((item % div) == 0)
            ndiv++;

    return ndiv;
}

array.filter((nmr) => nmrDivisores(nmr) == 2)
    .map((item) => { return { x: item, par: (item % 2) == 0 } })
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par));