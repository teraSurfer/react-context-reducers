import { usePlayers } from "./PlayerContext";

const ViewPlayer = () => {
  const { players } = usePlayers();
  return (
    <div>
      <h3>Player Details</h3>
      {Object.keys(players).map((id) => (
        <div key={id}>
          <p>{players[id].id}</p>
          <p>{players[id].name}</p>
          <p>{players[id].country}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewPlayer;
