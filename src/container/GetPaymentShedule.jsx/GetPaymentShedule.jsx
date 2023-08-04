import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetPaymentShedule = () => {
    const [Id, setId] = useState("");
    const navigate = useNavigate();

    const stateHandler = (e) => {
        setId((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }

    const formHandeler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        navigate("/details", {
            state: {
                data: Id,
                formdata: formdata,
                from: "GetPayment-Loan"
            }
        })
    }

    let formdata = [
        {
            "key": "action",
            "value": "get_repayment_schedule",
            "type": "text"
        },
        {
            "key": "transaction_id",
            "value": "TRANS00120230801042657",
            "type": "text"
        }
    ]

    return (
        <div className='getPayment top_cont'>
            <div className="container">
                <h3>Get Payment Shedule</h3>
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

export default GetPaymentShedule