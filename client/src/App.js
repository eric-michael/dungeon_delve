import { Route, Routes } from "react-router";

import Start from "./game/chooseCareer/chooseCareer";
import Game from "./game/game";

import { useSelector } from "react-redux";

function App() {
  const inGame = useSelector((state) => state.game.inGame);

  return (
    <div>
      <Routes>
        {inGame && <Route path="/" exact element={<Game />} />}
        {!inGame && <Route path="/" exact element={<Start />} />}
      </Routes>
    </div>
  );
}

export default App;
