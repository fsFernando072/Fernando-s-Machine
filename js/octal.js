let inputOct = document.querySelector('#ipt_octal');

inputOct.addEventListener('input', () => {
    inputOct.value = inputOct.value.replace(/[^0-7]/g, "");
});

function converterOct(){
    let octal = Number('0o' + document.querySelector('#ipt_octal').value);

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    mostrar.style.display = 'flex';

    resposta.innerHTML = 
        `<h1 class="titulo"> Resultado </h1>
        <p> <b> Binário: </b> ${octal.toString(2)} </p>
        <p> <b> Decimal: </b> ${octal.toString(10)} </p>
        <p> <b> Hexadecimal: </b> ${octal.toString(16)} </p>
        `;
}