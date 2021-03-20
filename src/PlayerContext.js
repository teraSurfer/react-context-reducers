import { createContext, useReducer, useContext } from "react";
// Contains Context and Provider

// default values for PlayerContext
const PlayerContext = createContext({
  players: {},
  dispatch: () => {}
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PLAYER":
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      };
    default:
      return state;
  }
}

// Provider Component
const PlayerProvider = ({ children }) => {
  const [players, dispatch] = useReducer(reducer, {});

  return (
    <PlayerContext.Provider value={{ players, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

// custom hook which simplifies passing data from parent to child
const usePlayers = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayers };
