const randomNumberInRange =
  require("./randomNumberInRange").randomNumberInRange;
/**
 * return a random number of rooms +/-1 from prev level, between 3 and 6 rooms
 * @param {int} num_rooms_prev_level number of rooms in previous level
 * @returns random int number between 3 and 6, with a maximum difference of 1 from prev level num rooms.
 */
function getNewNumRooms(num_rooms_prev_level) {
  let min = num_rooms_prev_level - 1;
  let max = num_rooms_prev_level + 1;
  num_rooms_prev_level < 4 ? min++ : null;
  num_rooms_prev_level > 5 ? max-- : null;
  console.log(min, max);
  return randomNumberInRange(min, max);
}

exports.getNewNumRooms = getNewNumRooms;
