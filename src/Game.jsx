import { useGame } from "./GameContext";

import "./game.css";

const NUM_HOLES = 9;

export default function Game() {
  const { score, time, stop, updateScore } = useGame();

  // determine location of mole
  let moleLocation = Math.floor(Math.random() * NUM_HOLES);

  return (
    <main>
      <nav>
        <button>Score: {score}</button>
        <button>Time: {time}</button>
        <button onClick={stop}>Restart</button>
      </nav>
      <div className="game-area">
        <ul>
          {Array.from({ length: NUM_HOLES }).map((_, i) => (
            <li
              onClick={() => {
                updateScore(i, moleLocation);
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
