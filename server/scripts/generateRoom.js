const room_types = require("../store/room_types").room_types;
const RoomNode = require("../models/RoomNode").RoomNode;

/* 
  A room_id needs 6 characters
  the first two are the dungeon_number
  the second two are the level_rank
  the last two are the room_number
  e.g. '021109' == dungeon 2, level 11, room 9
*/
function makeRoomId(dungeon_number, level_rank, room_number) {
  let x = [];
  let room_id = "";
  x.push(dungeon_number.toString());
  x.push(level_rank.toString());
  x.push(room_number.toString());

  for (let i in x) {
    if (x[i].length === 1) {
      x[i] = "0" + x[i];
    }
    room_id += x[i];
  }

  return room_id;
}

function generateRoom(
  seed,
  career_id,
  dungeon_number,
  level_rank,
  room_number,
  sets
) {
  const room_id = makeRoomId(dungeon_number, level_rank, room_number);
  const modified_seed = seed + level_rank + room_id;
  const room = { id: room_id };
  Object.assign(room, { sets: sets });
  switch (level_rank) {
    case 1:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 2:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 3:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 4:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 5:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 6:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 7:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 8:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 9:
      Object.assign(room, room_types["0"]);
      Object.assign(room, { type_id: 0 });
      Object.assign(room, { level_rank: level_rank });
      break;
    case 10:
      Object.assign(room, room_types["4"]);
      Object.assign(room, { type_id: 4 });
      Object.assign(room, { level_rank: level_rank });
      break;
    default:
      break;
  }

  return room;
}

exports.generateRoom = generateRoom;
