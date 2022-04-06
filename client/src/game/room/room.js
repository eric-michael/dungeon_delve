/* 
    Instance of a Room. Players enter rooms by selecting them from the Map.

    It should replace the Map Component on the Game page
*/

function Room(props){
    const location = props.location;
    return(<div>{location}</div>)
}

export default Room;