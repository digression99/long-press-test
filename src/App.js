import React, { useState, useEffect, useRef } from "react";
import TouchButton from "./TouchButton";
import LongPress from "./LongPress";
import ClassComponent from './ClassComponent';

const likeButtonStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  background: "white"
};

const App = () => {
  const [likeType, setLikeType] = useState(null);
  const [isShowBehavior, setIsShowBehavior] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  const behaviorLikeRef = useRef(null);

  useEffect(() => {
    document.addEventListener("contextmenu", e => e.preventDefault());
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", onClickBody);
    return () => document.body.removeEventListener("click", onClickBody);
  }, []);

  const onClickBody = e => {
    console.log("[onClickBody]");
    const node = behaviorLikeRef.current;
    if (node && (e.target === node || node.contains(e.target))) {
      return;
    }

    setIsShowBehavior(false);
  };

  const onClickSmile = e => {
    console.log("[onClickSmile]");
    setLikeType("great");
  };

  const onClickClose = e => {
    console.log("[onClickClose]");
    e.preventDefault();
    setIsShowBehavior(false);
  };

  const onReturn = e => {
    setLikeType(null);
    setIsShowBehavior(false);
  };

  const handleMouseEnter = () => {
    setIsShowBehavior(true);
  };

  const onMouseEnter = e => {
    console.log("[onMouseEnter]");
    const hoverTimer = setTimeout(handleMouseEnter, 1500);
    setHoverTimer(hoverTimer);
  };

  const onMouseLeave = e => {
    console.log("[onMouseLeave]");
    window.clearTimeout(hoverTimer);
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
    setIsShowBehavior(false);
  };

  return (
    <div className="app flex-center">
      <ClassComponent />
      <div>set like type : {likeType}</div>
      <div className="box">
        <LongPress onLongPress={onLongPress} onPress={onPress} time={1000}>
          <a
            className="smile flex-center"
            href="#"
            onClick={onClickSmile}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ background: likeType ? "yellow" : "white" }}
          >
            {likeType ? "liked!" : "smile"}
          </a>
        </LongPress>
        {isShowBehavior && (
          <div className="behavior-like" ref={behaviorLikeRef}>
            <TouchButton onClick={onClickClose} />
            <div className="like-button-list">
              <button
                style={likeButtonStyle}
                onClick={() => handleLikePost("great")}
              >
                like1
              </button>
              <button
                style={likeButtonStyle}
                onClick={() => handleLikePost("sad")}
              >
                like2
              </button>
              <button
                style={likeButtonStyle}
                onClick={() => handleLikePost("happy")}
              >
                like3
              </button>
            </div>
          </div>
        )}
      </div>
      <button onClick={onReturn}>return</button>
    </div>
  );
};

export default App;
