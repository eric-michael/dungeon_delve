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
    dispatch(playerActions.setRoomID(e.target.value));
  }

  const room_id = useSelector((state) => state.player.room_id);

  return (
    <div>
      <TopBar />
      {room_id && <Room room_id={room_id}/>}
      <Map enterRoomHandler={enterRoomHandler}/>
    </div>
  );
}

export default Game;
