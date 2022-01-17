
let op = '';
let hOrd = 0;
let end = false;

window.onload = function () {

    const calc = new Calculadora();

    const borrar = document.getElementById("borrar");
    const dividir = document.getElementById("dividir");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const mult = document.getElementById("mult");
    const cinco = document.getElementById("cinco");
    const cuatro = document.getElementById("cuatro");
    const seis = document.getElementById("seis");
    const rest = document.getElementById("rest");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const sumar = document.getElementById("sumar");
    const cero = document.getElementById("cero");
    const punto = document.getElementById("punto");
    const igual = document.getElementById("igual");
    
    const scHistory = document.getElementById("scHistory");
    scHistory.onclick = calc.Mem;
    
    borrar.onclick = calc.AC;

    sumar.onclick = calc.onClickOperator;
    rest.onclick = calc.onClickOperator;
    mult.onclick = calc.onClickOperator;
    dividir.onclick = calc.onClickOperator; 

    cero.onclick = calc.onClickFunction;
    uno.onclick = calc.onClickFunction;
    dos.onclick = calc.onClickFunction;  
    tres.onclick = calc.onClickFunction;
    cuatro.onclick = calc.onClickFunction; 
    cinco.onclick = calc.onClickFunction;
    seis.onclick = calc.onClickFunction;
    siete.onclick = calc.onClickFunction;
    ocho.onclick = calc.onClickFunction;
    nueve.onclick = calc.onClickFunction;
    punto.onclick = calc.onClickFunction;

    igual.onclick = calc.resultFunction;
}

function Calculadora () {

    const scOper = document.getElementById("scOper");
    const scResult = document.getElementById("scResult");

    this.AC = function () {
        scOper.innerText = '';
        scResult.innerText = '';
    }
    
    this.onClickFunction = function (event) {
        if (end) {
            scOper.innerText = '';
            end=false;
            console.log(event.target.textContent)
            
            scResult.innerText = '';
        }; 
        scOper.innerText += event.target.textContent;
    }

    this.onClickOperator = function (event) {
        if (scOper.innerText.indexOf("+") == -1 && 
            scOper.innerText.indexOf("-") == -1 &&
            scOper.innerText.indexOf("÷") == -1 &&
            scOper.innerText.indexOf("x") == -1) {

            scOper.innerText += event.target.textContent;
            op = event.target.textContent;
        }

        if (end) {
            scOper.innerText = '';
            end=false;
            if(event.target.textContent == "+" || 
               event.target.textContent == "-" ||
               event.target.textContent == "÷" ||
               event.target.textContent == "x") {
                scOper.innerText = scResult.innerText + event.target.textContent
                op = event.target.textContent; 
            }
            scResult.innerText = '';
        }; 
        
    }
    
    this.Mem = function () {
        scHistory.addEventListener('change', (event) => {
            scOper.innerText = event.target.value;
            scResult.innerText = ''
            end=false;
        });
    }
    
    this.resultFunction = function (event) {
        let cuenta = scOper.innerText.split(op);
        let num1 = parseFloat(cuenta[0]);
        let num2 = parseFloat(cuenta[1]);
        
        let result

        switch (op) {
        case 'x':
            result = num1 * num2;
            break
        case '+':
            result = num1 + num2;
            break
        case '-':
            result = num1 - num2;
            break
        case '÷':
            result = num1 / num2;
            break
        default:
            break  
        }

        if(isNaN(result)) {
            scResult.innerText = "Error";
        } else {
            scResult.innerText = result;
        }
        
        end = true;
        hOrd += 1;
        
        if(hOrd < 6){
            switch (hOrd) {
                case 1:
                    scH1.innerText = result;
                    break
                case 2:
                    scH2.innerText = result;
                    break
                case 3:
                    scH3.innerText = result;
                    break
                case 4:
                    scH4.innerText = result;
                    break
                default:
                    scH5.innerText = result;
                    break 
            }
        }
        else {
            scH1.innerText = result;
            hOrd = 1;
        }
    }
}

