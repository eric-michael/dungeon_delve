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
    dispatch(playerActions.setInRoom());
  }

  function leaveRoomHandler(e){
    dispatch(playerActions.setInRoom());
  }

  const in_room = useSelector((state) => state.player.in_room);
  const room_id = useSelector((state) => state.player.room_id);
  const dungeon_map = useSelector((state) => state.dungeon.dungeon_map);
  // type_id of the room. Maps to a description of the room. e.g. { 0 : "Common Battle" }
  let room_type_id = null;
  // I should be able to get the room_type from the room_id from the store
  console.log(room_id);
  if(room_id){
    const level_str = room_id.slice(2, 4);
    console.log(level_str);
    const index_from_level = parseInt(level_str) - 1;
    console.log(index_from_level);
    const room = dungeon_map[index_from_level].filter(room => {return room_id === room.room_id});
    console.log(room);
    room_type_id = room[0].type_id;
  }
  
  
  return (
    <div>
      <TopBar />
      {in_room && <Room room_id={room_id} room_type={room_type_id} leaveRoomHandler={leaveRoomHandler}/>}
      {!in_room && <Map enterRoomHandler={enterRoomHandler} />}
    </div>
  );
}

export default Game;
