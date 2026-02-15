import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState("welcome");

  const value = { score, setScore, page, setPage };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) {
    throw Error("useGame must be used within a GameProvider");
  }

  return value;
}
