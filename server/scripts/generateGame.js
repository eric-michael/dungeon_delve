const generateDungeon = require("./generateDungeon").generateDungeon;
const generateSeed = require("./generateSeed");

function generateGame(seed, career_id) {
  const game_seed = seed ? seed : generateSeed.generateSeed();

  const dungeon_number = 1;

  const generated_dungeon = generateDungeon(
    game_seed,
    career_id,
    dungeon_number
  );

  return generated_dungeon;
}

exports.generateGame = generateGame;
