/*
  Container for all of the combat room components
  Probably should handle all of the combat actions, and pass data to the child components.
*/

import ActionBar from "./combat_components/actionBar";
import DiscardPile from "./combat_components/discardPile";
import DrawPile from "./combat_components/drawPile";
import Enemy from "./combat_components/enemy";
import EnemyContainer from "./combat_components/enemyContainer";
import Hand from "./combat_components/hand";
import Player from "./combat_components/player";

import { useSelector, useDispatch } from "react-redux";

import { playerActions } from "../../../store/index";

function Combat() {

  let player_data = {};

  player_data.current_hp = useSelector((state) => state.player.current_hp);
  player_data.max_hp = useSelector((state) => state.player.max_hp);
  player_data.energy = useSelector((state) => state.player.energy);

  return (
    <div>
      Combat
      <Player player_data={player_data}/>
    </div>
  );
}

export default Combat;
