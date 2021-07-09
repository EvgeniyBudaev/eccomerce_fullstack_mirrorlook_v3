import {
  useReducer,
  useMemo,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import { IMirrors } from "types/mirror";

interface IMirrorsState {
  entities: IMirrors;
}

interface IState {
  mirrorsState: IMirrorsState;
}

interface IMirrorDispatch {
  type: string;
  payload: IMirrors;
}

interface IDefaultCtx {
  state: IState;
  dispatch: Dispatch<SetStateAction<IMirrorDispatch>>;
}

// initialState
const initialState: IDefaultCtx = {
  state: {
    mirrorsState: null,
  },
  dispatch: () => {},
};

// create context
export const Context = createContext<IDefaultCtx>(initialState);

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "MIRRORS_REQUEST":
      return { ...state, entities: action.payload };
    default:
      return state;
  }
};

// context provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const value = useMemo<IDefaultCtx>(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
