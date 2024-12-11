import React from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom';


const Reveal = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputValue = queryParams.get('value');
  return (
    <>
     <div className="full-screen-background" >
      <div className='User-secret-key' >
      <h1>Secret Santa hero </h1>
      <input value={inputValue}  className='Input-field' /> 
      </div>
     </div>
    </>
  );
};

export default Reveal;