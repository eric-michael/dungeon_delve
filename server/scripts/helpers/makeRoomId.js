/**
 * A room_id needs 6 characters.
 * The first two are the dungeon_number
 * The second two are the level_rank
 * The last two are the room_number
 * e.g. '021109' == dungeon 2, level 11, room 9
 * @param {int} dungeon_number
 * @param {int} level_rank
 * @param {int} room_number
 * @returns a string that represents the room number
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

exports.makeRoomId = makeRoomId;