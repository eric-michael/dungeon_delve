const room_types = require("../store/room_types").room_types;
/**
 * Node for a linked list
 *  There is no limit for the amount of parents at the moment so we'll keep it an array
 * */
class RoomNode {
  constructor(room_id, parent_ids = [], type_id = 0, name = '', set = []) {
    this.room_id = room_id;
    this.parent_ids = parent_ids;
    this.type_id = type_id;
    this.name = name;
    this.set = set;
  }

  setParentId(parent_id) {
    this.parent_ids.push(parent_id);
  }

  setTypeId(type_id) {
    this.type_id = type_id;
    this.setName(room_types[type_id].name);
  }

  setName(name){
    this.name = name;
  }

  addToSet(set){
    for(let x in set){
      if(this.set.indexOf(set[x]) == -1)
        this.set.push(set[x]);
    }
  }
}

exports.RoomNode = RoomNode;
