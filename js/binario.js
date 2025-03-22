let inputBin = document.querySelector('#ipt_binario');

inputBin.addEventListener('input', () => {
    inputBin.value = inputBin.value.replace(/[^0-1]/g, "");
});

function converterBin(){
    let binario = parseInt(document.querySelector('#ipt_binario').value, 2);

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    mostrar.style.display = 'flex';

    resposta.innerHTML = 
        `<h1 class="titulo"> Resultado </h1>
        <p> <b> Decimal: </b> ${binario.toString(10)} </p>
        <p> <b> Octal: </b> ${binario.toString(8)} </p>
        <p> <b> Hexadecimal: </b> ${binario.toString(16).toUpperCase()} </p>
        `;
}