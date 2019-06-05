import React from 'react';
import useDocumentTouch from './hooks/useDocumentTouch';

export default () =>{ 
  const documentTouched = useDocumentTouch();
  console.log('document touched : ', documentTouched);

  return (
    <div>
      is touched : {documentTouched ? 'true' : 'false'}
    </div>
  );
};

