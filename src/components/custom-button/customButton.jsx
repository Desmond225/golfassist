import React from 'react';
import './customButton.scss';

const CustomButton = ({children, inverted}) => (
    <button 
        className={`${inverted && 'inverted'} custom-button`}>{children}</button>
)

export default CustomButton;