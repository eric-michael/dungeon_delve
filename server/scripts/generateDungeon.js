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

  const rng = new RNG(seed);
  console.log(JSON.stringify(rng));
  const dungeon = [];
  const sets = [[1], [2], [3], [4]];
  let level_rank = 0;

  for (let i = 0; i < 10; i++) {
    level_rank = i + 1;
    dungeon.push(generateLevel(seed, career_id, dungeon_number, level_rank, sets));
  }
  return dungeon;
}

exports.generateDungeon = generateDungeon;
