const generateLevel = require("./generateLevel").generateLevel;

function generateDungeon(seed, career_id, dungeon_number) {
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
