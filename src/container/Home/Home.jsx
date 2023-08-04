import React, { useState } from 'react';
import WelcomeModel from '../../components/WelcomeModel/WelcomeModel';
import './Home.css'
import Hero from '../../components/Hero/Hero';

const Home = () => {
    const [model, setModel] = useState(false)
    const [name, setName] = useState("")

    const modelValid = (value) => {
        setName(value)
        setModel(true)
    }
    return (
        <div className='home'>
            {!model
                ? <WelcomeModel modelValid={modelValid} />
                : <Hero name={name} />
            }
        </div>
    )
}

export default Home