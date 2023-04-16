const RNG = require("../models/RNG").RNG;
const generateLevel = require("./generateLevel").generateLevel;

/**
 * Generate a dungeon
 * @param {string} seed 
 * @param {int} career_id 
 * @param {int} dungeon_number 
 * @returns an object that represents a dungeon. It contains levels which contain rooms.
 */
function generateDungeon(seed, career_id, dungeon_number) {

  /*
    rng : {
      "seed": {hash} the game seed
      "mapRng": {0-1 random number} random number that should be used in map rng
      "monsterRng": {0-1 random number} random number that should be used for monster rng
    }
  */
  const rng = new RNG(seed);
  console.log(JSON.stringify(rng));
  const dungeon = [];
  // sets are used to determine room connectivity. the algorithm uses joint-sets to connect rooms.
  const sets = [[1], [2], [3], [4]];
  let level_rank = 0;
  // prev_level_rooms are used to understand how to connect the rooms, i.e., how to add a room to a set
  let prev_level_rooms = [];

  // 10 levels per dungeon.
  for (let i = 0; i < 10; i++) {
    level_rank = i + 1;
    if(i > 0){
      prev_level_rooms = dungeon[i-1];
    }
    dungeon.push(generateLevel(seed, career_id, dungeon_number, level_rank, sets, prev_level_rooms));
  }
  return dungeon;
}

exports.generateDungeon = generateDungeon;
