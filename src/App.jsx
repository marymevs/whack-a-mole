import Welcome from "./Welcome";
import Game from "./Game";

import { useGame } from "./GameContext";

export default function App() {
  const { page } = useGame();

  return page === "welcome" ? <Welcome /> : <Game />;
}
