const room_types = require("../store/room_types").room_types;

function generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets) {
  const room_id =
    dungeon_number.toString() + level_rank.toString() + room_number.toString();
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