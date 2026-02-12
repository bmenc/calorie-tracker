import { createContext, type Dispatch, type ReactNode, useReducer } from "react";
import {
  activityReducer,
  initialState,
  type ActivityActions,
  type ActivityState,
} from "../reducers/activity-reducer";

type ActivityContextValue = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
};

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityContext = createContext<ActivityContextValue | undefined>(
  null!
);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <ActivityContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ActivityContext.Provider>
  );
};