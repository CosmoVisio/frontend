import React from 'react';

const BottonPrimary = ({ children, onClick }) => {
  return (
   
<button className='buttonStyle  m-1' onClick={onClick}>
        {children}
  </button>
  );
}

export default BottonPrimary;
