import React from 'react';

import './Button.css'
import { useNavigate } from 'react-router-dom';

const Button = ({value}) => {
    const navigate = useNavigate();
    const btnB = () => {
        navigate("/request")
    }
    return (
        <button className='btn' onClick={btnB}>
            {value}
        </button>
    )
}

export default Button