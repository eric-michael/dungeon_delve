/* 
    Game exists after the player chooses a starting career. It hols the Top bar and the Map
*/

import TopBar from "../ui/topBar";
import Map from "./map/map";
import Room from "./room/room";

import store from "../store";

import { useSelector, useDispatch } from "react-redux";

import { playerActions } from "../store/index";

function Game() {
    const dispatch = useDispatch();

  function enterRoomHandler(e) {
    console.log(e.target.value);
    dispatch(playerActions.setLocation(e.target.value));
  }

  const location = useSelector((state) => state.player.location);

  return (
    <div>
      <TopBar />
      {location && <Room location={location}/>}
      <Map enterRoomHandler={enterRoomHandler}/>
    </div>
  );
}

export default Game;
