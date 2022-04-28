const RoomNode = require("../models/RoomNode").RoomNode;
const shuffleArray = require("./helpers/shuffleArray").shuffleArray;
const makeRoomId = require("./helpers/makeRoomId").makeRoomId;
const randomNumberInRange = require("./helpers/randomNumberInRange")
  .randomNumberInRange;

// A link represents a "hallway" between RoomNodes, connecting rooms from a lower floor to a higher floor.
// Get a random value in the range of min_num_links and max_num_links.
function getNumLinks(num_rooms_prev_level, num_rooms_this_level) {
  const min_num_links =
    num_rooms_prev_level > num_rooms_this_level
      ? num_rooms_prev_level
      : num_rooms_this_level;
  const max_num_links_1 = num_rooms_prev_level + num_rooms_this_level - 1;
  const max_num_links_2 = num_rooms_prev_level * 2;
  const max_num_links = Math.min(max_num_links_1, max_num_links_2);
  return randomNumberInRange(min_num_links, max_num_links);
}

/**
 * Returns an array of RoomNode objects.
 * @param {Array} previous_level_rooms An array containing the string value room_ids of previous level rooms.
 * @param {int} num_rooms a positive int value representing the number of rooms on the level.
 * @param {int} dungeon_number a positive int value representing which dungeon the rooms exist on. 1-3
 * @param {int} level_rank a positive int value representing which level the rooms exist on. 1-10
 * @return {Array} an array of RoomNode objects
 */
function generateRooms(
  previous_level_rooms,
  num_rooms,
  dungeon_number,
  level_rank
) {
  // first 5 chars of room_id
  //const room_code = previous_level_rooms[0].slice(0, 3) + "20"; // this needs to change, pretty sloppy.
  const num_rooms_this_level = num_rooms;
  const num_rooms_prev_level = previous_level_rooms.length;

  // first floor
  if (level_rank == 1) {
    // just return 4 standard floors.
    let rooms = Array(num_rooms_this_level)
      .fill(null)
      .map((x, i) => {
        //return new RoomNode(room_code + (i + 1));
        room_id = makeRoomId(dungeon_number, level_rank, i + 1);
        return new RoomNode(room_id);
      });
    return rooms;
  }
  // end first floor

  const parent_room_code =
    "0" + dungeon_number.toString() + "0" + (level_rank - 1).toString() + "0";
  let link_array = Array(num_rooms_prev_level).fill(1);

  // each parent gets one link. But, we want to randomly add an extra link to some where applicable
  // this array randomizes which parents get extra links.
  let extra_links_parents = Array(num_rooms_prev_level)
    .fill(null)
    .map((x, i) => i);
  extra_links_parents = shuffleArray(extra_links_parents);
  // end extra link array

  let children_num_links = Array(num_rooms).fill(1);
  let extra_links_children = Array(num_rooms)
    .fill(null)
    .map((x, i) => i);
  extra_links_children = shuffleArray(extra_links_children);

  let rooms = Array(num_rooms_this_level)
    .fill(null)
    .map((x, i) => {
      //return new RoomNode(room_code + (i + 1));
      room_id = makeRoomId(dungeon_number, level_rank, i + 1);
      return new RoomNode(room_id);
    });

  /* Get number of links */
  let num_links = getNumLinks(num_rooms_prev_level, num_rooms_this_level);
  /* End get number of links */

  num_links_extra_parents = num_links - num_rooms_prev_level;
  num_links_extra_children = num_links - num_rooms;
  // add to random link_array bucket (no more than 2 per bucket)
  while (num_links_extra_parents) {
    link_array[extra_links_parents.pop()]++;
    num_links_extra_parents--;
  }
  while (num_links_extra_children) {
    children_num_links[extra_links_children.pop()]++;
    num_links_extra_children--;
  }

  let parent_cursor = 0;
  let child_cursor = 0;

  for (let i = 0; i < rooms.length; i++) {
    while (children_num_links[child_cursor]) {
      if (link_array[parent_cursor]) {
        rooms[i].setParentId(parent_room_code + (parent_cursor + 1));
        link_array[parent_cursor]--;
        children_num_links[child_cursor]--;
      } else {
        parent_cursor++;
      }
    }
    child_cursor++;
  }
  return rooms;
}

exports.generateRooms = generateRooms;
