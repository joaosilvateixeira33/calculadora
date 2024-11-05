/* eslint-disable react/prop-types */
import './errorStyles.css';


export const ErrosMessage = ({message}) =>{
    return(
        <div className="error-message">{message}</div>
    );
}