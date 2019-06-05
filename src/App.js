import React, { useState, useEffect, useRef } from "react";
// import EventComponent from './EventComponent';
// import ThirdEventComponent from "./ThirdEventComponent";
// import SecondEventComponent from "./SecondEventComponent";
import TouchMove from './TouchMove';
// import SecondTouchComponent from './SecondTouchComponent';
import MouseEventComponent from './MouseEventComponent';

const App = () => {
  return (
    <div className="app flex-center">
      {/* <MouseEventComponent /> */}
      <TouchMove />
    </div>
  );
};

export default App;
