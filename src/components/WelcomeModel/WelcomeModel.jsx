import React, { useState } from 'react';
import "./WelcomeModel.css"

const WelcomeModel = ({modelValid}) => {
    const [name, setName] = useState("");
    const nameHandle = (e) => {
        setName(e.target.value)
    }
    
    const formHandler = (e) => {
        e.preventDefault();
        const data = name;
        modelValid(data)
        setName("");
    }
    return (
        <div className='welcome'>
            <div className="model">
                <h2>Welcome To Prime Base</h2>
                <form className='form' onSubmit={formHandler}>
                    <label htmlFor="naem">Kindly Enter Your Name</label>
                    <input value={name} type="text" name="name" id="name" onChange={nameHandle} required/>
                    <button type="submit" className='btn'>Done</button>
                </form>
            </div>
        </div>
    )
}

export default WelcomeModel