import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar/Navbar';
import Home from './container/Home/Home';

import './App.css';

import GetPaymentShedule from './container/GetPaymentShedule.jsx/GetPaymentShedule';
import AllLoan from './container/AllLoan/AllLoan';
import RequestLoan from './container/Request/RequestLoan';
import Details from './container/Details/Details';

const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details' element={<Details />} />
      <Route path='/requestLoan' element={<RequestLoan />} />
      <Route path='/allLoan' element={<AllLoan />} />
      <Route path='/getPaymentShedule' element={<GetPaymentShedule />} />
    </Routes>
    </>
  )
}

export default App;