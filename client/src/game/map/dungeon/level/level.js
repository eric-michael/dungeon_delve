/*
    A level has between 3-5 rooms on it. 

    Each level should have a rough *value* that dictates what the player might find on the level.
    for example: the first 3 levels of a dungeon should not have any chests, and should probably be combat encounters

    The first level of each dungeon should be a combat encounter.

    props:
    {
        id: int, PK
        rank: int, 1-10
        set: [],
    }
*/

import classes from "./level.module.css";

import RoomNode from "./roomNode/roomNode";

function Level(props) {
  const enterRoomHandler = props.enterRoomHandler;
  const level_data = props.level_data;
  return (
    <div className={classes.container}>
      {level_data.map((room) => {
        return (
          <RoomNode
            key={room.room_id}
            room_data={room}
            enterRoomHandler={enterRoomHandler}
          />
        );
      })}
    </div>
  );
  //return <div className={classes.container}><p>A level</p><Room /><Room /><Room /><Room /></div>;
}

export default Level;
