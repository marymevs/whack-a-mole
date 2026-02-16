import { useGame } from "./GameContext";

import "./game.css";
export default function Game() {
  const { score, scores, setScore, setScores, setPage } = useGame();

  // determine location of mole
  let moleLocation = Math.floor(Math.random() * 9);

  let secondsLeft = 15;
  const intervalId = window.setInterval(timer, 1000);

  function timer() {
    secondsLeft--;
    console.log(secondsLeft);
    if (secondsLeft === 0) {
      window.clearInterval(intervalId); // why does this work?
    }
  }

  return (
    <main>
      <nav>
        <button>Score: {score}</button>
        <button>Timer: {secondsLeft /*not updating*/}</button>
        <button
          onClick={() => {
            restartGame(score, scores, setScore, setScores, setPage);
          }}
        >
          Restart
        </button>
      </nav>
      <div className="game-area">
        <ul>
          {Array.from({ length: 9 }).map((_, i) => (
            <li
              onClick={() => {
                updateScore(i, moleLocation, score, setScore);
              }}
              key={i}
              className={i === moleLocation ? "hole mole" : "hole"}
            ></li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function updateScore(i, moleLocation, score, setScore) {
  if (i === moleLocation) {
    setScore(score + 1);
  }
}

function restartGame(score, scores, setScore, setScores, setPage) {
  setScores([...scores, score]);
  setScore(0);
  setPage("welcome");
}
