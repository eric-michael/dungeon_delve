/* Career Object holds all of the information for the player character's chosen career. */
const starting_weapons =
  require("../store/player/equipment").starting_equipment;

class Career {
  constructor(id, title, hp, energy, starting_weapon) {
    this.id = id;
    this.title = title;
    this.hp = hp;
    this.energy = energy;
    this.starting_weapon = starting_weapon;
  }

  // Return all available careers. Used for career selection at the begninning of the game.
  static getAllCareers() {
    const career_starts = [];
    career_starts.push(new Career(0, "Warrior", 80, 3, starting_weapons["0"]));
    career_starts.push(new Career(1, "Rogue", 75, 3, starting_weapons["1"]));
    career_starts.push(new Career(2, "Wizard", 70, 3, starting_weapons["2"]));
    return career_starts;
  }
}

exports.Career = Career;
