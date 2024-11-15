
import { create } from 'zustand';
import { AppState } from './system.type';
import { produce } from 'immer';
interface State {
  appState: AppState;
  setAppState: (state: (prevState: AppState) => Partial<AppState>) => void;
  //setAppStatus: (status: AppStatus) => void;
}
export const useStateStore = create<State>((set) => ({
  appState: {
    name: 'unname'
  },
  setAppState: (state) => set(produce((draft: State) => {
    Object.assign(draft.appState, state(draft.appState));
  }))

}));
