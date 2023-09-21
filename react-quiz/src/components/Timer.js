import React, { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    setInterval(() => {
      // console.log("tick");
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
