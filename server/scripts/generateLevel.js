const generateRooms = require("./generateRooms").generateRooms;
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
function generateLevel(
  seed,
  career_id,
  dungeon_number,
  level_rank,
  sets,
  prev_level_rooms
) {
  let levelGenerated = [];
  //let room_number = 0;
  // start with 4 rooms on every dungeon
  let num_rooms = getNumRooms(prev_level_rooms.length);
  console.log("num rooms", num_rooms);
  switch (level_rank) {
    case 1:
      // 4 rooms on level 1
      num_rooms = 4;
      levelGenerated =
        generateRooms([], num_rooms, dungeon_number, level_rank)
      ;
      break;
    case 2:
      //num_rooms = getNumRooms(num_rooms_prev_level);
      // 4 rooms on level 2
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 3:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 4:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 5:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 6:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 7:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 8:
      //num_rooms = getNumRooms(num_rooms);
      // 4 rooms on level 3
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 9:
      //num_rooms = getNumRooms(num_rooms);
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    case 10:
      // 1 rooms on level 10
      levelGenerated = generateRooms(
        prev_level_rooms,
        num_rooms,
        dungeon_number,
        level_rank
      );
      break;
    default:
      break;
  }
  return levelGenerated;
}

exports.generateLevel = generateLevel;
