/* 
    Player Sprite*
    Player status

    HP, buffs, equipment, etc.
*/

function Player(props){
    let current_hp = props.player_data.current_hp;
    let max_hp = props.player_data.max_hp;
    let max_energy = props.player_data.energy;
    return (
    <div>
        Player
        Health: {current_hp}/{max_hp}
        Max Energy: {max_energy}
    </div>
    );
}

export default Player