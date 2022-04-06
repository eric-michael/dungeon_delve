/* This is the map. From here, players can continue down the path, exploring new rooms. */

import classes from "./map.module.css";

import Dungeon from "./dungeon/dungeon";

function Map(props) {
  const enterRoomHandler = props.enterRoomHandler;
  return (
    <div className={classes.container}>
      This is the map
      <Dungeon enterRoomHandler={enterRoomHandler}/>
    </div>
  );
}

export default Map;
