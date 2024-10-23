import { create } from 'zustand';

interface ServerInfo {
  token: string;
  url: string;
  mockMode?: boolean;
}

interface ConfigState {
  net: ServerInfo;
  setServerInfo: (data: Partial<ServerInfo>) => void;
}

const useConfigState = create<ConfigState>((set) => ({
  net: { token: '', url: '', mockMode: false },
  setServerInfo: (data) => set((state) => ({ net: { ...state.net, ...data } })),
}));

export default useConfigState;