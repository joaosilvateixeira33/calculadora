import { useState } from "react";
import { ButtonsComponent } from "../buttons";
import { InputsComponent } from "../Inputs";
import { ResultComponent } from "../result";
import './calculatorStyles.css';

export const CalculatorComponent = () => {
    let [numerador, setNumerador] = useState('');
    let [denominador, setDenominador] = useState('');
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

        if (operacao === '/' && denominadorConvertido === 0) {
            setResultado('Erro: Divisão por zero');
            return;
        }

        numerador = Number(numerador);
        denominador = Number(denominador)

        let res;
        switch (operacao) {
            case '+':
                setNumerador('');
                setDenominador('');
                res = `${numerador} + ${denominador} = ${numerador + denominador}`;
                break;
        }

        setResultado(res);
    };

    const handleButtonClick = (label) => {
        if(label == 'C'){
            setNumerador('');
            setDenominador('');
            setResultado(null);
            setOperacao(null);
            setErro(null);
        }else{
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
                {erro && <div className="error-message">{erro}</div>}
                <ResultComponent result={resultado} />
            </div>
        </div>
    );
};
