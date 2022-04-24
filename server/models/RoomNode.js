/**
 * Node for a linked list
 *  There is no limit for the amount of parents at the moment so we'll keep it an arrray
 * */

class RoomNode {
  constructor(room_id, parent_ids = [], type_id = 0) {
    this.room_id = room_id;
    this.parent_ids = parent_ids;
    this.type_id = type_id;
  }

  setParentId(parent_id) {
    this.parent_ids.push(parent_id);
  }

  setTypeId(type_id) {
    this.type_id = type_id;
  }
}

exports.RoomNode = RoomNode;
