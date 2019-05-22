import React, { useState, useEffect, useRef } from 'react';
import TouchButton from './TouchButton';
import LongPress from './LongPress';

const App = () => {
  const [ likeType, setLikeType ] = useState(null);
  const [ isShowBehavior, setIsShowBehavior ] = useState(false);
  const [ hoverTimer, setHoverTimer ] = useState(null);

  const behaviorLikeRef = useRef(null);

  useEffect(() => {
    document.addEventListener('contextmenu', e => e.preventDefault());
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', onClickBody);
    return () => document.body.removeEventListener('click', onClickBody);
  }, []);

  const onClickBody = e => {
    console.log('[onClickBody]');
    const node = behaviorLikeRef.current;
    if (node && (e.target === node || node.contains(e.target))) {
      return;
    }

    setIsShowBehavior(false);
  };

  const onClickSmile = e => {
    console.log('[onClickSmile]');
    // e.preventDefault();
    setLikeType('great');
  }

  const onClickClose = e => {
    console.log('[onClickClose]');
    e.preventDefault();
    setIsShowBehavior(false);
  };
  
  const onReturn = e => {
    setLikeType(null);
    setIsShowBehavior(false);
  }

  const handleMouseEnter = () => {
      console.log('hover timer ended.');
      setIsShowBehavior(true);
  }

  const onMouseEnter = e => {
    console.log('[onMouseEnter]');
    const hoverTimer = setTimeout(handleMouseEnter, 1500);
    setHoverTimer(hoverTimer);
    console.log('hover timer : ', hoverTimer);
  }

  const onMouseLeave = e => {
    console.log('[onMouseLeave]');
    window.clearTimeout(hoverTimer);
    console.log('hover timer : ', hoverTimer);
  };

  const onLongPress = e => {
    console.log("[onLongPress]");
    setIsShowBehavior(true);
  };
  
  const onPress = e => {
    console.log("[onPress]");
  };

  const handleLikePost = likeType => {
    console.log("[handleLikePost]");
    setLikeType(likeType);
  };

  return (
    <div className="app flex-center">
      <div>set like type : {likeType}</div>
      <div className="box">
        <LongPress
          onLongPress={onLongPress}
          onPress={onPress}
          time={1000}
        >
          <a
            className="smile flex-center"
            href="#"
            onClick={onClickSmile}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ background : likeType ? 'yellow' : 'white' }}
          >
            {likeType ? 'liked!' : 'smile'}
          </a>
        </LongPress>
        {isShowBehavior && (
          <div className="behavior-like" ref={behaviorLikeRef}>
            <TouchButton onClick={onClickClose} />
            <div>
              <button onClick={() => handleLikePost('great')}>like1</button>
              <button onClick={() => handleLikePost('sad')}>like2</button>
              <button onClick={() => handleLikePost('happy')}>like3</button>
            </div>
          </div>
        )}
      </div>
      <button onClick={onReturn}>return</button>
    </div>
  );
}

export default App;
