const generateRoom = require("./generateRoom").generateRoom;

let psuedorandom = 1;

function generateLevel(seed, career_id, dungeon_number, level_rank, sets) {
  const levelGenerated = [];
  let room_number = 0;

  switch (level_rank) {
    case 1:
      // 4 rooms on level 1
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 2:
      // 4 rooms on level 2
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 3:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 4:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 5:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 6:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 7:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 8:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 9:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    case 10:
      // 4 rooms on level 3
      for (let i = 0; i < 4; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(seed, career_id, dungeon_number, level_rank, room_number, sets[i])
        );
      }
      break;
    default:
      break;
  }
  return levelGenerated;
}

exports.generateLevel = generateLevel;
