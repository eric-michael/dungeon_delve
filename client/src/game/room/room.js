/* 
    Instance of a Room. Players enter rooms by selecting them from the Map.

    It should replace the Map Component on the Game page
*/

import classes from "./room.module.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CombatContainer from "./combat/combatContainer";

import Combat from "./combat/combat";

function Room(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState({});

  const game_seed = useSelector((state) => state.game.seed);

  const room_id = props.room_id;

  /* const post_data = {
    seed: game_seed,
    room_id: room_id,
  }; */

  // rooms will be created on the server when supplied with a room_id + game_seed.
  useEffect(() => {
    fetch(`api/getRoom/room/${room_id}/seed/${game_seed}`, {
      method: "GET",
      //body: JSON.stringify(post_data),
    }).then((res) => {
      res.json().then((data) => {
        setRoom(data);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div className={classes.container}>
      <div>{room_id}</div>
      <button onClick={props.leaveRoomHandler}>leave room</button>
    </div>
  );
}

export default Room;
