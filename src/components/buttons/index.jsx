import './buttonStyles.css'

const buttonsLabels = [
    ['C','+', '-', 'x', '/']
];

export const ButtonsComponent = ({onButtonClick}) =>{


    return(
        <div className="buttons-content">
            {buttonsLabels.map((row, rowIndex)=>(
                <div className="buttons-row" key={rowIndex}>
                    {row.map((label, index)=>(
                        <button key={index} onClick={() => onButtonClick(label)}>{label}</button>
                    ))}
                </div>
            ))}
        </div>
    );
}