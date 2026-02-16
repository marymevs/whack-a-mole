import { createContext, useState, useContext, useRef, useEffect } from "react";

const GameContext = createContext();
const TIME_LIMIT = 15;

export default function GameProvider({ children }) {
  const [page, setPage] = useState("welcome");
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState([]);

  const [time, setTime] = useState(TIME_LIMIT);
  const timer = useRef();

  useEffect(() => {
    if (time <= 0) stop();
  }, [time]);

  const updateScore = (i, moleLocation) => {
    if (i === moleLocation) {
      setScore(score + 1);
    }
  };

  const start = () => {
    setPage("game");
    timer.current = setInterval(() => setTime((time) => time - 1), 1000);
  };

  const stop = () => {
    setPage("welcome");

    setScores([...scores, score]);
    setScore(0);

    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  const value = {
    page,
    score,
    scores,
    time,
    start,
    stop,
    updateScore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) {
    throw Error("useGame must be used within a GameProvider");
  }

  return value;
}
