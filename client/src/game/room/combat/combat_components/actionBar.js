/* 
    Should hold the player's draw pile, hand, and discard pile, and addt. actions
*/

import DrawPile from "./drawPile";
import Hand from "./hand";
import DiscardPile from "./discardPile";

function ActionBar(){
    return(
        <div><DrawPile /><Hand /><DiscardPile /></div>
    )
}

export default ActionBar;