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

complete example for full store

```
import { create } from 'zustand';
import { AppState, States, Modules, ChatData, FlowData, HomeData, SettingData, Configs } from './system.type';
import { produce } from 'immer';

interface State {
  app_data: AppState;
  setAppData: (state: (preState: AppState) => Partial<AppState>) => void;
  chat_data: ChatData;
  setChatData: (data: (preData: ChatData) => Partial<ChatData>) => void;
  flow_data: FlowData;
  setFlowData: (data: (preData: FlowData) => Partial<FlowData>) => void;
  home_data: HomeData;
  setHomeData: (data: (preData: HomeData) => Partial<HomeData>) => void;
  setting_data: SettingData;
  setSettingData: (data: (preData: SettingData) => Partial<SettingData>) => void;
  config_data: Configs;
  setConfigData: (data: (preData: Configs) => Partial<Configs>) => void;
  initializeApp: (configs: Configs) => States;
}

// 创建一个 zustand store
import { create } from 'zustand';
import { AppState, States, Modules, ChatData, FlowData, HomeData, SettingData, Configs } from './system.type';
import { produce } from 'immer';

interface State {
  app_data: AppState;
  setAppData: (state: (preState: AppState) => Partial<AppState>) => void;
  chat_data: ChatData;
  setChatData: (data: (preData: ChatData) => Partial<ChatData>) => void;
  flow_data: FlowData;
  setFlowData: (data: (preData: FlowData) => Partial<FlowData>) => void;
  home_data: HomeData;
  setHomeData: (data: (preData: HomeData) => Partial<HomeData>) => void;
  setting_data: SettingData;
  setSettingData: (data: (preData: SettingData) => Partial<SettingData>) => void;
  config_data: Configs;
  setConfigData: (data: (preData: Configs) => Partial<Configs>) => void;
  initializeApp: (configs: Configs) => States;
}

// 创建一个 zustand store
const useAppStore = create<State>((set) => ({
  app_data: {
    current_module: Modules.Chat,
    initial_ready: false,
    app_state: States.Loading,
  },
  config_data: {
    url: '',
    token: '',
    mock: false,
  },
  chat_data: {
    conversations: [],
  },
  flow_data: {
    flows: [],
  },
  home_data: {
    brandings: [],
  },
  setting_data: {
    userInfo: {},
  },
  setAppData: (state) => set(produce((draft: State) => {
    Object.assign(draft.app_data, state(draft.app_data));
  })),
  setChatData: (data) => set(produce((draft: State) => {
    Object.assign(draft.chat_data, data(draft.chat_data));
  })),
  setFlowData: (data) => set(produce((draft: State) => {
    Object.assign(draft.flow_data, data(draft.flow_data));
  })),
  setHomeData: (data) => set(produce((draft: State) => {
    Object.assign(draft.home_data, data(draft.home_data));
  })),
  setSettingData: (data) => set(produce((draft: State) => {
    Object.assign(draft.setting_data, data(draft.setting_data));
  })),
  setConfigData: (data) => set(produce((draft: State) => {
    Object.assign(draft.config_data, data(draft.config_data));
  })),
  initializeApp: (configs: Configs) => {
    set(produce((draft: State) => {
      draft.config_data = configs; // 使用传入的配置数据
      draft.app_data.initial_ready = true
      draft.app_data.app_state = States.Waiting;
    }));
    return States.Waiting; // 返回更新后的状态
  },
}));

export default useAppStore;

```

useage:
```
  const app_data = useAppStore(state => state.app_data)
  const initializeApp = useAppStore((state) => state.initializeApp) // 获取 initializeApp 方法
  const { url, token, mock } = props

  useEffect(() => {
    // 初始化应用程序
    const configs = {
      url: url || 'demo',
      token: token || '',
      mock: mock || false,
    }
    initializeApp(configs) // 调用 initializeApp 方法
    console.log(app_data)
    // 其他初始化逻辑
    // api_getConversations({
    //   data: {
    //     user: 'bbq'
    //   },
    //   config: {
    //     url: 'https://api.dify.ai/v1',
    //     token: 'app-oo9gDHKOTUN3eDX7oXMvkIv8'
    //   }
    // })
  }, [initializeApp])
```

