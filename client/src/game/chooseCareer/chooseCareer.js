/* Starting screen
    select a class
*/
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { playerActions, dungeonActions, gameActions } from "../../store/index";

function Start() {
  const [careers, setCareers] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const seedRef = useRef();
  const careerRef = useRef();

  const dispatch = useDispatch();

  // Collect the id of the selected starting career. e.target.value.
  function careerChoiceHandler(e) {
    setSelectedCareer(careers[e.target.value]);
  }

  function startGameHandler(e) {
    e.preventDefault();
    console.log(careerRef);
    const data = {
      seed: seedRef.current.value,
      career_id: careerRef.current.value,
    };
    fetch("/api/generateGame", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((json) => {
        console.log(json);
        dispatch(dungeonActions.setDungeonNumber(1));
        dispatch(dungeonActions.setDungeonMap(json.dungeon));

        dispatch(playerActions.setCareerName(selectedCareer.title));
        dispatch(playerActions.setCurrentHP(selectedCareer.hp));
        dispatch(playerActions.setMaxHP(selectedCareer.hp));
        dispatch(playerActions.setEnergy(selectedCareer.energy));
        dispatch(playerActions.setEquipment(selectedCareer.starting_weapon));
        
        dispatch(gameActions.setSeed(json.seed));
        dispatch(gameActions.setInGame());
      })
    );
  }

  useEffect(() => {
    fetch("api/career/getAllCareers").then((res) => {
      res.json().then((data) => {
        setCareers(data);
        setIsLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Choose your starting class:</h1>
      {careers.map((career) => {
        return (
          <button
            key={career.id}
            onClick={careerChoiceHandler}
            value={career.id}
          >
            {career.title}
          </button>
        );
      })}
      {selectedCareer && (
        <div>
          Starting HP: {selectedCareer.hp} <br />
          Starting equipment: {selectedCareer.starting_weapon.name}
          <br />
          <br />
          <form onSubmit={startGameHandler}>
            <label htmlFor="seed">Seed (leave empty for random)</label>
            <input type="text" id="seed" ref={seedRef} />
            <input type="hidden" id="career" value={selectedCareer.id} ref={careerRef} />
            <button>Start</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Start;
