/* View Player data */

import { useSelector } from "react-redux";

import { playerActions } from "../store";

function Player(){
    const careerInfo = useSelector((state) => state.player.career);
    console.log(careerInfo);
    return(
        <div>Career Title: {careerInfo.title} <br /></div>
    )
}

export default Player;