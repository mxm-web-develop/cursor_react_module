import { produce } from 'immer';
import { create } from 'zustand';

interface ServerInfo {
  token: string;
  url: string;
  mockMode?: boolean;
}

interface ConfigState {
  net: ServerInfo;
  setServerInfo: (data: Partial<ServerInfo>) => void;
  resetServerInfo: () => void; // 添加重置方法
}

const useConfigState = create<ConfigState>((set) => ({
  net: { token: '', url: '', mockMode: false },
  setServerInfo: (data) => set(produce((state: ConfigState) => {
    state.net = { ...state.net, ...data };
  })),
  resetServerInfo: () => set({ net: { token: '', url: '', mockMode: false } }), // 重置状态
}));

export default useConfigState;