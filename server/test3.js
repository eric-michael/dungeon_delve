const RoomNode = require("./models/RoomNode").RoomNode;

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//const previous_level_rooms = ["010101", "010102", "010103", "010104", "010105"];
//const num_rooms = 3;

const previous_level_rooms = ["010101", "010102", "010103"];
const num_rooms = 6;

function run(previous_level_rooms, num_rooms) {
  // first 5 chars of room_id
  const room_code = previous_level_rooms[0].slice(0, 5);
  const num_rooms_this_level = num_rooms;
  let parent_ids = [];

  let num_parents = 0;
  let last_parent_room_number = 0;
  let parent_room_id = "";
  let min_parents = 1;
  let max_parents = 1;
  let the_last_room = false;
  const num_rooms_prev_level = previous_level_rooms.length;

  for (let i = 0; i < num_rooms_this_level; i++) {
    parent_ids[i] = [];

    if(last_parent_room_number === num_rooms_prev_level){
        last_parent_room_number--;
    }

    max_parents = num_rooms_prev_level - last_parent_room_number;
    
    num_parents = randomNumberInRange(min_parents, max_parents);

    for (let j = 0; j < num_parents; j++) {
      parent_room_id = room_code + (last_parent_room_number + 1);
      console.log("pushing ", parent_room_id, " to ", i + 1);
      parent_ids[i].push(parent_room_id);
      last_parent_room_number++;
    }
    if (Math.random() > 0.5) {
      last_parent_room_number--;
    }
  }
  for (var x in parent_ids) {
    for (var y in parent_ids[x]) {
      console.log("room ", x, ": ", parent_ids[x][y]);
    }
  }
}

run(previous_level_rooms, num_rooms);
