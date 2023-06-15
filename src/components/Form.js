import React from "react";
import './Form.css';

const Form = ({value, onChange, onCreate, onKonKeyDowneyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onCreate ={onCreate} onKonKeyDowneyPress={onKonKeyDowneyPress}/>
           <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
};

export default Form;