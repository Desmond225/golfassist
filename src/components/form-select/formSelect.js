import React from 'react';
import './formSelect.scss';

const FormSelect = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <select className="form-select" {...otherProps}>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
        </select>

        {label && 
        (<label className={`${otherProps.value.length && 'shrink'} form-select-label`}>
            {label}
        </label>
        )
    }
    </div>
)

export default FormSelect;