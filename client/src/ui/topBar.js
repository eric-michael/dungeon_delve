import classes from "../ui_styles/topBar.module.css";

import { useDispatch, useSelector } from "react-redux";

import { gameActions } from "../store/index";

function TopBar() {
  const career_name = useSelector((state) => state.player.career_name);
  const current_hp = useSelector((state) => state.player.current_hp);
  const max_hp = useSelector((state) => state.player.max_hp);
  const energy = useSelector((state) => state.player.energy);

  const dispatch = useDispatch();

  function exitGameHandler() {
    dispatch(gameActions.setInGame());
  }
  return (
    <div className={classes.position}>
      <button onClick={exitGameHandler} className={classes.floatButton}>
        Exit Game
      </button>
      <div>
        {career_name} <br /> {current_hp}/{max_hp} HP
      </div>
    </div>
  );
}

export default TopBar;
