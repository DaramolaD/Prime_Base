import React from 'react';
import "./Hero.css"
import { Link } from 'react-router-dom';

const Hero = ({name}) => {
    return (
        <div className="container">
            <h1>Welcome to Prime Base</h1>
            <p>{name}</p>
            <div className="content">
                <h2>Below are the avaliable actions </h2>
                <div className="btn_cont">
                    <button className='btn'><Link to="/requestLoan">Request For Loan</Link></button>
                    <button className='btn'><Link to="/allLoan">Get All Loan Request</Link></button>
                    <button className='btn'><Link to="/getPaymentShedule">Get Repayment Schedule</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero