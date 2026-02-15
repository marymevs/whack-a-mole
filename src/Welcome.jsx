import "./welcome.css";
import { useGame } from "./GameContext";

export default function Welcome() {
  const { setPage } = useGame();
  return (
    <main>
      <section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points!</p>
        <p>How many can you get?</p>
        <button
          onClick={() => {
            setPage("game");
          }}
        >
          Play
        </button>
      </section>
      <section className="high-score">
        <h2>High Scores</h2>
        <p>None yet... Play the game!</p>
      </section>
    </main>
  );
}
