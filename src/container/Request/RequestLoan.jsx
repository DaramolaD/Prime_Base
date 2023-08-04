import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestLoan = () => {
    const [data, setData] = useState("");
    const navigate = useNavigate();

    const stateHandler = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }

    const formHandeler = (e) => {
        e.preventDefault();
        navigate("/details", {
            state: {
                data: data,
                formdata: formdata,
                from: "Resquest-Loan"
            }
        })
    }
    let formdata = [
        {
            "key": "action",
            "value": "request_for_loan",
            "type": "text"
        },
        {
            "key": "full_name",
            "value": data.name,
            "type": "text"
        },
        {
            "key": "loan_amount",
            "value": data.loan,
            "type": "text"
        },
        {
            "key": "repayment_duration",
            "value": data.repayment_duration,
            "type": "text"
        }
    ]




    return (
        <div className='request top_cont'>
            <div className="container">
                <h3>Request For Loan</h3>
                <form className='form' onSubmit={formHandeler}>
                    <div className="formItem">
                        <label className='label' htmlFor="name">Enter Your Full Name</label>
                        <input type="text" name="name" placeholder='Full Name' required onChange={stateHandler} />
                    </div>
                    <div className="formItem">
                        <label className='label' htmlFor="number">Enter your number</label>
                        <input type="number" name="loan" placeholder='Loan Amount' required onChange={stateHandler} />
                    </div>
                    <div className="formItem">
                        <label className='label' htmlFor="">Repayment Duration <br /> <span>(In month)</span></label>
                        <input type="number" name="repayment_duration" placeholder='Repayment Duration' required onChange={stateHandler} />
                    </div>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RequestLoan