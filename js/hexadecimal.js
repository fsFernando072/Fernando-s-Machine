let inputHexa = document.querySelector('#ipt_hexa');

inputHexa.addEventListener('input', () => {
    inputHexa.value = inputHexa.value.replace(/[^0-9A-Fa-f]/g, "");
});

function converterHex(){
    let hexa = Number('0x' + document.querySelector('#ipt_hexa').value);

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    mostrar.style.display = 'flex';

    resposta.innerHTML = 
    `<h1 class="titulo"> Resultado </h1>
    <p> <b> Binário: </b> ${hexa.toString(2)} </p>
    <p> <b> Octal: </b> ${hexa.toString(8)} </p>
    <p> <b> Decimal: </b> ${hexa.toString(10)} </p>
    `
}