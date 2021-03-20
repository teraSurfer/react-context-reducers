import { usePlayers } from "./PlayerContext";

const player = {
  id: 1,
  name: "kohli",
  country: "ind"
};

const AddPlayer = () => {
  const { dispatch } = usePlayers();

  function handleAddplayer() {
    dispatch({ type: "ADD_PLAYER", payload: player });
  }

  return <button onClick={handleAddplayer}>Add Player</button>;
};

export default AddPlayer;
