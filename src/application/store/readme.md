example for zustand store

```
import { create } from 'zustand';
import { AppState, States, Navs } from './system.type';
import { produce } from 'immer';


interface State {
  app_data: AppState
  setAppData: (state: (preState: AppState) => Partial<AppState>) => void
}

// 创建一个 zustand store
const useAppStore = create<State>((set) => ({
  app_data: {
    current_nav: Navs.Chat,
    app_state: States.Loading
  }, // 初始应用状态
  // 更新应用状态的方法
  setAppData: (state) => set(produce((draft: State) => {
    Object.assign(draft.app_data, state(draft.app_data))
  }))
}));

export default useAppStore;
```
