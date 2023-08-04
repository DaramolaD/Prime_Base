import React, { useEffect, useState } from 'react';
import "./Details.css"
import { useLocation } from 'react-router-dom';
import { request } from '../../utils/fetchApi/fetchApi';

const Details = () => {
  const [result, setResult] = useState("")
  const location = useLocation();
  const {formdata} = location.state;
  const name = formdata[1].value;

  useEffect(() => {
    console.log();
    const fetchFeatured = async () => {
      try {
        const data = await request("POST", [], formdata)
        setResult(data)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFeatured();
  }, [])


  return (
    <div className='details'>
      <div className="container">
        <h2 className='nameTop'>{name}</h2>
        <h2>The status for your request = {result.statusText}</h2>
        <p className='para_title'>Kindly Contact Our Rep, To Proceed Futher</p>
        
      </div>
    </div>
  )
}

export default Details;