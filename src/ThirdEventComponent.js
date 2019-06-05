import React from 'react';
import useLongPress from './hooks/useLongPress';

export default () => {

  const onPress = e => {
    console.log('on press');
  };

  const onLongPress = e => {
    console.log('on long press');
  };

  const { onContextMenu, onTouchStart, onTouchMove, onTouchEnd } = useLongPress({ onPress, onLongPress });

  return (
    <div>
      <button
        onContextMenu={onContextMenu}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      >Button</button>
    </div>
  )
};

