import './inputStyles.css';

export const InputsComponent = ({ numerador, denominador, onNumeradorChange, onDenominadorChange }) => {
    return (
        <div className="inputs-content"> 
            <div className="input-control">
                <label>Numerador:</label>
                <input 
                    type="text" 
                    value={numerador} 
                    onChange={(e) => onNumeradorChange(e.target.value)} 
                />
            </div>

            <div className="input-control">
                <label>Denominador:</label>
                <input 
                    type="text" 
                    value={denominador} 
                    onChange={(e) => onDenominadorChange(e.target.value)} 
                />
            </div>
        </div>
    );
};