import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { AccountActionsType } from "ducks/account";
import { CartActionsType } from "ducks/cart";
import { LoadingActionsType } from "ducks/loading";
import { OrderActionsType } from "ducks/order";
import { rootReducer } from "ducks/rootReducer";
import { ScrollActionsType } from "ducks/scroll";
import { store } from "ducks/store";
import { UnhandledErrorActionsType } from "ducks/unhandledError";

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions =
  | AccountActionsType
  | CartActionsType
  | OrderActionsType
  | ScrollActionsType
  | LoadingActionsType
  | UnhandledErrorActionsType;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
