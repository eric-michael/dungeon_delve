const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const routes = require("./routes");

app.listen(port, console.log(`Listening on port ${port}`));

app.get("/api/careers", routes.getAllCareers);

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

app.get("/api/getRoom/room/:room_id/seed/:game_seed", (req, res) => {
  console.log(req.params);
});

module.exports = app;
