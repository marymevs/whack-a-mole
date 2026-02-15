import { useGame } from "./GameContext";

import "./game.css";
export default function Game() {
  const { score, setScore, setPage } = useGame();

  // determine initial location of mole
  const moleLocation = Math.floor(Math.random() * 9);

  return (
    <main>
      <nav>
        <button>Score: {score}</button>
        <button
          onClick={() => {
            setPage("welcome");
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
                setScore(score + 1);
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
