import React from "react";
import './Form.css';

/*
value 
onCreate
onChange
onKonKeyDown
*/
const Form = ({value, onChange, onCreate, onKonKeyDown}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onCreate ={onCreate} onKonKeyDown={onKonKeyDown}/>
           <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
};

export default Form;