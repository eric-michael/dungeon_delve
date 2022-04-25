import { createSlice, configureStore } from "@reduxjs/toolkit";

const playerInitialState = {
  // string holding the player's location ID
  room_id: '',
  career_name: '',
  current_hp: 0,
  max_hp: 0,
  energy: 0,
  deck: [],
  equipment: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState: playerInitialState,
  reducers: {
    setCareerName(state, action) {
      state.career_name = action.payload;
      console.log(state.career_name);
    },
    setCurrentHP(state, action){
      state.current_hp = action.payload;
    },
    setMaxHP(state, action){
      state.max_hp = action.payload;
    },
    setEnergy(state, action){
      state.energy = action.payload;
    },
    setEquipment(state, action){
      state.equipment = action.payload;
    },
    setDeck(state, action) {
      state.deck = action.payload;
    },
    setRoomID(state, action) {
      state.room_id = action.payload;
    },
  },
});

const dungeonInitialState = {
  dungeon_number: 0,
  dungeon_map: {},
};

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: dungeonInitialState,
  reducers: {
    setDungeonNumber(state, action) {
      state.dungeon_number = action.payload;
    },
    setDungeonMap(state, action) {
      state.dungeon_map = action.payload;
    },
  },
});

const gameInitialState = {
  seed: "",
  in_game: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState: gameInitialState,
  reducers: {
    setSeed(state, action) {
      state.seed = action.payload;
    },
    setInGame(state, action) {
      state.inGame = !state.inGame;
    },
  },
});

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    dungeon: dungeonSlice.reducer,
    game: gameSlice.reducer,
  },
});

export const playerActions = playerSlice.actions;
export const dungeonActions = dungeonSlice.actions;
export const gameActions = gameSlice.actions;

export default store;
