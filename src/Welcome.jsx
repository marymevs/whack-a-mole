import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const goToGame = () => {
    navigate("/game"); // Pass the desired path
  };
  return (
    <main>
      <h1>Whack a Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={goToGame}>Play</button>
      <h2>High Scores</h2>
      <p>None yet...Play the game!</p>
    </main>
  );
}
