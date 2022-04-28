/* 

    A dungeon has levels->rooms on it. There should be about 3 in the game.

    props: 
    {
        id: int, PK
        rank: int, 1-2
    }

*/

import classes from "./dungeon.module.css";

import Level from "./level/level";

import { useSelector } from "react-redux";

function Dungeon(props) {
  const dungeon = useSelector((state) => state.dungeon.dungeon_map);
  console.log(dungeon);
  const enterRoomHandler = props.enterRoomHandler;
  return (
    <div className={classes.container}>
      <p>A dungeon</p>
      {dungeon.map((level) => {
        return (
          <Level
            key={level.id}
            level_data={level}
            enterRoomHandler={enterRoomHandler}
          />
        );
      })}
    </div>
  );
}

export default Dungeon;
