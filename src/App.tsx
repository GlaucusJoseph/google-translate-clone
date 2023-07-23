import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useReducer } from "react";
import { type State } from "./types.d";

// Creating the initial state
const initialState: State = {
  fromLenguage: "auto",
  toLenguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

// Creating a reducer
function reducer(state: State, action) {
  const { type, payload } = action;

  if (type === "INTERCHANGE_LENGUAGES") {
    return {
      ...state,
      fromLenguage: state.toLenguage,
      toLenguage: state.fromLenguage,
    };
  }

  if (type === "SET_FROM_LENGUAGE") {
    return {
      ...state,
      fromLenguage: payload,
    };
  }

  if (type === "SET_TO_LENGUAGE") {
    return {
      ...state,
      toLenguage: payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: payload,
    };
  }

  return state;
}

function App() {
  // Using el hook use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  );
}

export default App;
