import React from 'react';
import '../../App.css';

const Home = () => {
  return (
    <>
     <div className="full-screen-background" >
         <div  className='User-secret-key' >
          <h1> Enter UserKey </h1>
          <input  placeholder='Enter The Magic Code' className='Input-field'  />
         </div>
     </div>
    </>
  );
};

export default Home;