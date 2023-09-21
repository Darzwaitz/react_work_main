import React, { useEffect } from "react";

function Timer({ dispatch }) {
  useEffect(() => {
    setInterval(() => {
      // console.log("tick");
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);

  return <div className="timer">05:00</div>;
}

export default Timer;
