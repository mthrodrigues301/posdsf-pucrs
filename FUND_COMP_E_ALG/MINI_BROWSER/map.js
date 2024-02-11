// TDD - Test Driven Development

// Map, com base no ultimo ID, vai sempre sobrecrever o ultimo item
// Evitando a duplicata
var novoMapa = new Map(); 

class HistoryMap {

}

// 11/11/2011 as 11 da noite;
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Titulo do site', url: '' });
novoMapa.set('11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa;
console.log(resultado);
