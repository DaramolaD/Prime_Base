import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllLoan = () => {
    const [Id, setId] = useState("");
    const navigate = useNavigate();

    const stateHandler = (e) => {
        setId(e.target.value)
    }
    const formHandeler = (e) => {
        e.preventDefault();
        navigate("/details", {
            state : {
                data: Id,
                formdata: formdata,
                from: "All-Loan"
            }})
    }

    const formdata = [
        {
            "key": "action",
            "value": "get_all_loan_request",
            "type": "text"
        },
        {
            "key": "transaction_id",
            "value": Id,
            "type": "text"
        }
    ]

    return (
        <div className='allLoan top_cont'>
            <div className="container">
                <h3>Get All Loan</h3>
                <form className='form' onSubmit={formHandeler}>
                    <div className="formItem">
                        <label className='label' htmlFor="trans_no">Enter your Transaction ID</label>
                        <input type="text" name="trans_no" placeholder='Transaction ID' required onChange={stateHandler} />
                    </div>
                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AllLoan