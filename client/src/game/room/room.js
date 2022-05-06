/* 
    Instance of a Room. Players enter rooms by selecting them from the Map.

    It should replace the Map Component on the Game page
*/

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import classes from "./room.module.css";

import Combat from "./combat/combat";

function Room(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState({});

  const game_seed = useSelector((state) => state.game.seed);

  const room_id = props.room_id;

  const post_data = {
    seed: game_seed,
    room_id: room_id,
  };

  // rooms will be created on the server when supplied with a room_id + game_seed.
  useEffect(() => {
    fetch("api/getRoom", {
      method: "POST",
      body: JSON.stringify(post_data),
    }).then((res) => {
      res.json().then((data) => {
        setRoom(data);
        setIsLoading(false);
      });
    });
  }, []);

  return <div className={classes.container}><div>{room_id}</div><button onClick={props.leaveRoomHandler}>leave room</button></div>;
}

export default Room;
