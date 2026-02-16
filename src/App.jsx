import Welcome from "./Welcome";
import Game from "./Game";

import { useGame } from "./GameContext";

export default function App() {
  const { page } = useGame();

  return (
    <>
      <h1>Whack a Mole</h1>
      {page === "welcome" ? <Welcome /> : <Game />}
    </>
  );
}
