let original = document.querySelector('#original');
let ofuscado = document.querySelector('#ofuscado');


const botaoOfuscar = document.querySelector('.ofuscar');
botaoOfuscar.addEventListener('click', function() {
    let value = original.value

    if(value.length == 0 ) {
        return alert('Campo vazio!');
    }
    
    value = value.replace(/i/gi, 'inis')
        .replace(/e/gi, 'enter')
        .replace(/o/gi, 'omber')
        .replace(/u/gi, 'ufter')
        .replace(/a/gi, 'ais');

    ofuscado.value = value;
});

const botaoDesofuscar = document.querySelector('.desofuscar');
botaoDesofuscar.addEventListener('click', function() {
    let value = ofuscado.value;

    if(value.length == 0 ) {
        return alert('Campo vazio!');
    }

    value = value.replace(/enter/gi, 'e')
        .replace(/omber/gi, 'o')
        .replace(/inis/gi, 'i')
        .replace(/ufter/gi, 'u')
        .replace(/ais/gi, 'a');

    original.value = value;
});


const botaoLimpar = document.querySelector('.limpar');
botaoLimpar.addEventListener('click', () => {
    original.value = '';
    ofuscado.value = '';
})