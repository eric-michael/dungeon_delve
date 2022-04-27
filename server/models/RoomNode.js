/**
 * Node for a linked list
 *  There is no limit for the amount of parents at the moment so we'll keep it an array
 * */

class RoomNode {
  constructor(room_id, parent_ids = [], type_id = 0, set = []) {
    this.room_id = room_id;
    this.parent_ids = parent_ids;
    this.type_id = type_id;
    this.set = set;
  }

  setParentId(parent_id) {
    this.parent_ids.push(parent_id);
  }

  setTypeId(type_id) {
    this.type_id = type_id;
  }

  addToSet(set){
    for(let x in set){
      this.set.push(set[x]);
    }
  }
}

exports.RoomNode = RoomNode;
