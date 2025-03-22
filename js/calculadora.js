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
    let num1 = document.querySelector('#ipt_num1').value;
    let num2 = document.querySelector('#ipt_num2').value;
    let tipoNum1 = document.querySelector('#sel_num1').value;
    let tipoNum2 = document.querySelector('#sel_num2').value;
    let ope = document.querySelector('#sel_operacao').value;
    let baseResul = document.querySelector('#sel_resultado').value;

    let resposta = document.querySelector('#resposta');

    let mostrar = document.querySelector('#mostrar_resposta');

    let mensagem = '';

    mostrar.style.display = 'flex';

    if(ope == 'div' && num2 == 0){
        resposta.innerHTML = 
            `<h1 class="titulo"> Resultado </h1>
            <p> Impossível dividir por 0! </p>
            `;
    }else{
        mensagem = 
            `<h1 class="titulo"> Resultado </h1>
            <table>
                <tr>
                    <th> Número </th>
                    <th> Binário </th>
                    <th> Resultado </th>
                </tr>
            `;

        if(tipoNum1 == 'bin'){
            dec1 = Number('0b' + num1);
            mensagem += 
                `<tr>
                    <td> -- </td>
                    <td> ${num1}₂ </td>
                    <td> ${dec1}₁₀ </td>
                 </tr>
                `;
        }else if(tipoNum1 == 'dec'){
            dec1 = Number(num1);
            mensagem += 
                `<tr>
                    <td> -- </td>
                    <td> -- </td>
                    <td> ${dec1}₁₀ </td>
                 </tr>
                `;
        }else if(tipoNum1 == 'oct'){
            dec1 = Number('0o' + num1);
            mensagem += 
                `<tr>
                    <td> ${num1}₈ </td>
                    <td> ${dec1.toString(2)}₂ </td>
                    <td> ${dec1}₁₀ </td>
                </tr>
                `;
        }else{
            dec1 = Number('0x' + num1);
            mensagem += 
                `<tr>
                    <td> ${num1}₁₆ </td>
                    <td> ${dec1.toString(2)}₂ </td>
                    <td> ${dec1}₁₀ </td>
                </tr>
                `;
        }

        if(tipoNum2 == 'bin'){
            dec2 = Number('0b' + num2);
            mensagem += 
                `<tr>
                    <td> -- </td>
                    <td> ${num2}₂ </td>
                    <td> ${dec2}₁₀ </td>
                 </tr>
                `;
        }else if(tipoNum2 == 'dec'){
            dec2 = Number(num2);
            mensagem += 
                `<tr>
                    <td> -- </td>
                    <td> -- </td>
                    <td> ${dec2}₁₀ </td>
                 </tr>
                `;
        }else if(tipoNum2 == 'oct'){
            dec2 = Number('0o' + num2);
            mensagem += 
                `<tr>
                    <td> ${num2}₈ </td>
                    <td> ${dec2.toString(2)}₂ </td>
                    <td> ${dec2}₁₀ </td>
                </tr>
                `;
        }else{
            dec2 = Number('0x' + num2);
            mensagem += 
                `<tr>
                    <td> ${num2}₁₆ </td>
                    <td> ${dec2.toString(2)}₂ </td>
                    <td> ${dec2}₁₀ </td>
                </tr>
                `;
        }

        if(ope == 'adi'){
            var resul = dec1 + dec2;

            mensagem += 
                `<tr>
                    <td> ${dec1}₁₀ + ${dec2}₁₀ = ${resul}₁₀ </td>
                    <td> ${resul.toString(2)}₂ </td>
                `;
        }else if(ope == 'sub'){
            var resul = dec1 - dec2;

            mensagem += 
                `<tr>
                    <td> ${dec1}₁₀ - ${dec2}₁₀ = ${resul}₁₀ </td>
                    <td> ${resul.toString(2)}₂ </td>
                `;
        }else if(ope == 'mul'){
            var resul = dec1 * dec2;

            mensagem += 
                `<tr>
                    <td> ${dec1}₁₀ x ${dec2}₁₀ = ${resul}₁₀ </td>
                    <td> ${resul.toString(2)}₂ </td>
                `;
        }else{
            var resul = dec1 / dec2;

            mensagem += 
                `<tr>
                    <td> ${dec1}₁₀ ÷ ${dec2}₁₀ = ${resul}₁₀ </td>
                    <td> ${resul.toString(2)}₂ </td>
                `;
        }

        if(baseResul == 'bin'){
            mensagem += 
            `
                    <td> ${resul.toString(2)}₂ </td>
                </tr>
            </table>
            `;
        }else if(baseResul == 'dec'){
            mensagem += 
            `
                    <td> ${resul}₁₀ </td>
                </tr>
            </table>
            `;
        }else if(baseResul == 'oct'){
            mensagem += 
            `
                    <td> ${resul.toString(8)}₈ </td>
                </tr>
            </table>
            `;
        }else{
            mensagem += 
            `
                    <td> ${resul.toString(16)}₁₆ </td>
                </tr>
            </table>
            `;
        }

        resposta.innerHTML = mensagem;

    }
}