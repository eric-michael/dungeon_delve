/* 

    This is a "room". It explains the places the player can stop at. It exists on the level component.
    The rank of the level should determine what room types are allowed.
    a room should have a "type" that describes what kind of encounter it will be. 

    props: 
    {
        id: int
        type_id: int
        name: string
        set: []
    }
*/

import classes from "./roomNode.module.css";

/* 
    Build a string in the following format:
    (1,2,4)
    based on which sets the room belongs to
*/
function buildStringFromSets(sets) {
  let set_string = "(";
  for (let i in sets) {
    set_string += sets[i] + ",";
  }
  set_string = set_string.slice(0, -1);
  set_string += ")";
  return set_string;
}

function RoomNode(props) {
  console.log(props);
  const enterRoomHandler = props.enterRoomHandler;
  // room_type maps to what kind of room it is; eg common battle, rest area, etc.
  //const room_type = props.room_data.type_id;
  const room_id = props.room_data.room_id;
  // then name of the room that appears on the map screen
  const room_name = props.room_data.name;
  // which sets the room belongs to, array of ints.
  const sets = props.room_data.set;
  const set_string = buildStringFromSets(sets);
  return (
    <div className={classes.inline}>
      <button value={room_id} onClick={enterRoomHandler}>
        {room_name}
        {set_string}
      </button>
    </div>
  );
}

export default RoomNode;
