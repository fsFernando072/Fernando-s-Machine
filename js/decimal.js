let inputDec = document.querySelector('#ipt_decimal');

inputDec.addEventListener('input', () => {
    inputDec.value = inputDec.value.replace(/[^0-9]/g, "");
});

function converterDec(){
    let decimal = Number(document.querySelector('#ipt_decimal').value);

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    mostrar.style.display = 'flex';

    resposta.innerHTML = 
    `<h1 class="titulo"> Resultado </h1>
    <p> <b> Binário: </b> ${decimal.toString(2)} </p>
    <p> <b> Octal: </b> ${decimal.toString(8)} </p>
    <p> <b> Hexadecimal: </b> ${decimal.toString(16)} </p>
    `
}