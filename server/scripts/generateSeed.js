function generateSeed(seed) {
  const hash_seed = seed ? seed : Math.random().toString();

  const crypto = require("crypto");
  const hash = crypto.createHash("sha256");
  const data = hash.update(hash_seed, 'utf-8');
  const randomSeed = data.digest("hex");

  return randomSeed;
}

exports.generateSeed = generateSeed;
