import React from 'react'
import { useUserName } from './UserName'
import Timer from './Timer';

export default function SubHeader() {
  const { name } = useUserName();
  return (
    <div className='container'>
      <div className='timer-container'>
        <h3>Nombre:</h3>
        <h3 className='text-timer'>{name || 'Nombre'}</h3>
        <div>
        <Timer/>
        </div>
      </div>
    </div>
    
  );
}
