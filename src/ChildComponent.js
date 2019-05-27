import React from 'react';

export default ({ arrowFunction, functionFunction }) => { 

  return (
    <div>
      in child component
      {arrowFunction()}
      {functionFunction()}
    </div>
  )
};