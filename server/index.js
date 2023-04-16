const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const career = require("./routes/career");

app.listen(port, console.log(`Listening on port ${port}`));

app.use("/api/career", career);

const generateGame = require("./scripts/generateGame").generateGame;

const starting_career = require("./store/player/careerStart").career_starts;

app.post("/api/generateGame", (req, res) => {
  const [game_seed, dungeon] = generateGame(req.body.seed, req.body.career_id);
  res.send({
    message: "generate game route",
    dungeon: dungeon,
    career: starting_career[req.body.career_id],
    seed: game_seed,
  });
});

app.get("/api/getRoom/:room_id/:game_seed", (req, res) =>{
  res.send({
    message: "generate room",
    room: req.body.room_id
  })
});

module.exports = app;
