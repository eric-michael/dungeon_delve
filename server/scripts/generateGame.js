const generateDungeon = require("./generateDungeon").generateDungeon;
const generateSeed = require("./generateSeed").generateSeed;

/**
 * Entry point for generating the game. Uses the provided seed to randomly create the map.
 * @param {string} seed the seed for the RNG object. Can be entered by player or randomly generated.
 * @param {int} career_id selected player career
 * @returns the dungeon object
 */
function generateGame(seed, career_id) {
  const game_seed = seed ? seed : generateSeed();

  const dungeon_number = 1;

  const generated_dungeon = generateDungeon(
    game_seed,
    career_id,
    dungeon_number
  );

  return generated_dungeon;
}

exports.generateGame = generateGame;
