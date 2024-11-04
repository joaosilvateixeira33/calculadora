import './resultStyles.css';

export const ResultComponent = ({ result }) => {
    return (
        <div className="result-container">
            <p>Resultado:</p>
            <div className="resultad">{result}</div>
        </div>
    );
};