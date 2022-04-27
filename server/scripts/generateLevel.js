const generateRoom = require("./generateRoom").generateRoom;
const getNumRooms = require("./helpers/getNewNumRooms").getNewNumRooms;
const seedrandom = require("seedrandom");

/* const generator = seedrandom(hash_seed);
  let randomNumber = generator();
  randomNumber = randomNumber.toString(); */

/**
 * Generate a level. This needs to be refactored once data models and generation logic are all figured out.
 * @param {*} seed 
 * @param {*} career_id 
 * @param {*} dungeon_number 
 * @param {*} level_rank 
 * @param {*} sets 
 * @returns 
 */
function generateLevel(seed, career_id, dungeon_number, level_rank, sets, num_rooms_prev_level) {
  const levelGenerated = [];
  let room_number = 0;
  // start with 4 rooms on every dungeon
  let num_rooms = getNumRooms(num_rooms_prev_level);

  switch (level_rank) {
    case 1:
      // 4 rooms on level 1
      num_rooms = 4;
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 2:
      //num_rooms = getNumRooms(num_rooms_prev_level);
      // 4 rooms on level 2
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 3:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 4:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 5:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 6:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 7:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 8:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 9:
      //num_rooms = getNumRooms(num_rooms);
      for (let i = 0; i < num_rooms; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    case 10:
      // 1 rooms on level 10
      for (let i = 0; i < 1; i++) {
        room_number = i + 1;
        levelGenerated.push(
          generateRoom(
            seed,
            career_id,
            dungeon_number,
            level_rank,
            room_number,
            sets[i]
          )
        );
      }
      break;
    default:
      break;
  }
  return levelGenerated;
}

exports.generateLevel = generateLevel;
