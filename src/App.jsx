import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Game from "./Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
