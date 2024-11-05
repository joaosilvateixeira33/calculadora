import { useState } from "react";
import { ButtonsComponent } from "../buttons";
import { InputsComponent } from "../Inputs";
import { ResultComponent } from "../result";
import './calculatorStyles.css';
import { ErrosMessage } from "../error";

export const CalculatorComponent = () => {
    const [numerador, setNumerador] = useState('');
    const [denominador, setDenominador] = useState('');
    const [resultado, setResultado] = useState(null);
    const [operacao, setOperacao] = useState(null);
    const [erro, setErro] = useState(null);

    const handleCalculate = () => {
        if (isNaN(numerador) || isNaN(denominador)) {
            setErro('Por favor, insira apenas números.');
            setResultado(null);
            return;
        }

        setErro(null);

        const num = Number(numerador);
        const den = Number(denominador);

        if (operacao === '/' && den === 0) {
            setResultado('Erro: Divisão por zero');
            return;
        }

        let res;
        switch (operacao) {
            case '+':
                res = `${num} + ${den} = ${num + den}`;
                break;
            case '-':
                res = `${num} - ${den} = ${num - den}`;
                break;
            case 'x':
                res = `${num} x ${den} = ${num * den}`;
                break;
            case '/':
                res = `${num} / ${den} = ${num / den}`;
                break;
            default:
                res = null;
                break;
        }

        setResultado(res);
        setNumerador('');
        setDenominador('');
    };

    const handleButtonClick = (label) => {
        if (label === 'C') {
            setNumerador('');
            setDenominador('');
            setResultado(null);
            setOperacao(null);
            setErro(null);
        } else {
            setOperacao(label);
            handleCalculate();
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-content">
                <InputsComponent 
                    numerador={numerador} 
                    denominador={denominador} 
                    onNumeradorChange={setNumerador} 
                    onDenominadorChange={setDenominador} 
                />
                <ButtonsComponent onButtonClick={handleButtonClick} />
                {erro && <ErrosMessage message={erro} />}
                <ResultComponent result={resultado} />
            </div>
        </div>
    );
};
