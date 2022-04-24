/* Object model for generating/storing all RNG values for the game */

const generateSeed = require("../scripts/generateSeed").generateSeed;
const sr = require("seedrandom");

class RNG{
    constructor(){
        this.seed = this.seedGen();
        this.mapRng = this.mapGen(this.seed);
        this.monsterRng = this.monsterGen(this.seed);
    }

    seedGen(){
        return generateSeed();
    }

    mapGen(seed){
        const generator = sr(seed + 'map');
        return generator();
    }

    monsterGen(seed){
        const generator = sr(seed + 'monster');
        return generator();
    }

    roomGen(room_id){
        const generator = sr(this.seed + room_id);
        return generator();
    }
}

exports.RNG = RNG;