let inputNum1 = document.querySelector('#ipt_num1');
let inputNum2 = document.querySelector('#ipt_num2');

let selNum1 = document.querySelector('#sel_num1');
selNum1.addEventListener('change', () => {
    inputNum1.value = '';
});

let selNum2 = document.querySelector('#sel_num2');
selNum2.addEventListener('change', () => {
    inputNum2.value = '';
});

inputNum1.addEventListener('input', () => {
    if(selNum1.value == 'bin'){
        inputNum1.value = inputNum1.value.replace(/[^0-1]/g, "");
    }else if(selNum1.value == 'dec'){
        inputNum1.value = inputNum1.value.replace(/[^0-9]/g, "");
    }else if(selNum1.value == 'oct'){
        inputNum1.value = inputNum1.value.replace(/[^0-7]/g, "");
    }else{
        inputNum1.value = inputNum1.value.replace(/[^0-9A-Fa-f]/g, "");
    }
});

inputNum2.addEventListener('input', () => {
    if(selNum2.value == 'bin'){
        inputNum2.value = inputNum2.value.replace(/[^0-1]/g, "");
    }else if(selNum2.value == 'dec'){
        inputNum2.value = inputNum2.value.replace(/[^0-9]/g, "");
    }else if(selNum2.value == 'oct'){
        inputNum2.value = inputNum2.value.replace(/[^0-7]/g, "");
    }else{
        inputNum2.value = inputNum2.value.replace(/[^0-9A-Fa-f]/g, "");
    }
});

function calcular(){
    let num1 = document.querySelector('#ipt_num1');
    let num2 = document.querySelector('#ipt_num2');

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    mostrar.style.display = 'flex';

    resposta.innerHTML = 
    `<h1 class="titulo"> Resultado </h1>
    `
}