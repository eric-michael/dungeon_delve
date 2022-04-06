function generateSeed(seed) {
  const hash_seed = seed ? seed : Math.random().toString();

  const seedrandom = require("seedrandom");
  const generator = seedrandom(hash_seed);
  let randomNumber = generator();
  randomNumber = randomNumber.toString();

  const crypto = require("crypto");
  const hash = crypto.createHash("sha256");
  const data = hash.update(randomNumber, "utf-8");
  const randomSeed = data.digest("hex");

  console.log(randomSeed);

  return randomSeed;
}

exports.generateSeed = generateSeed;
