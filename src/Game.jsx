import { useGame } from "./GameContext";

import "./game.css";
export default function Game() {
  const { score, setPage } = useGame();

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
            <li key={i} className="hole">
              .
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
