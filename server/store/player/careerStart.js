const Career = require("../../models/career").Career;
const starting_equipment = require("./equipment").starting_equipment;

const career_starts = [];
career_starts.push(new Career(0, "Warrior", 80, 3, starting_equipment[0]));
career_starts.push(new Career(1, "Rogue", 75, 3, starting_equipment[1]));
career_starts.push(new Career(2, "Wizard", 70, 3, starting_equipment[2]));

exports.career_starts = career_starts;

