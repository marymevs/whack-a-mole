import { useState } from "react-router-dom";

export default function Game() {
  const [score] = useState(0);
  let seconds = 0;

  const incrementTime = () => {
    setInterval(seconds++, 1000);
    console.log(seconds);
  };
  return (
    <>
      <h1>Wack a Mole</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Time: {incrementTime}</p>
        <button>Restart</button>
      </div>
    </>
  );
}
