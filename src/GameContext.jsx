import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [page, setPage] = useState("welcome");
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);

  const value = { page, setPage, score, setScore, scores, setScores };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) {
    throw Error("useGame must be used within a GameProvider");
  }

  return value;
}
