import AddPlayer from "./AddPlayer";
import { PlayerProvider } from "./PlayerContext";
import ViewPlayer from "./ViewPlayer";

export default function App() {
  return (
    <div>
      <PlayerProvider>
        <AddPlayer />
        <ViewPlayer />
      </PlayerProvider>
    </div>
  );
}
