// 05d_arrayForEach.js

array = [4, 5, 6, 7, 8, 9, 10];

array.forEach(
    (nro) => console.log(
        nro + " -> " + (nro % 2 == 0 ? "par" : "ímpar")
    )
);

nmrDivisores = (item) => {
    let ndiv = 0;
    for (let div = 1; div <= item; div++)
        if ((item % div) == 0)
            ndiv++;

    return ndiv;
}

array.forEach(
    (nro) => console.log(
        nro + ` -> nDivisores de 1 até ${nmr} = ` + nmrDivisores(nmr)
    )
);