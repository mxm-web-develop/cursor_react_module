import { createContext, useContext } from 'react';
import useConfigState from './useConfigState';
import useAppState from './useAppState';

interface StoreContextType {
  configState: ReturnType<typeof useConfigState>; // 根据 useConfigState 的返回类型定义
  appState: ReturnType<typeof useAppState>; // 根据 useAppState 的返回类型定义
}

const StoreContext = createContext<StoreContextType | null>(null); // 添加类型
export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const configState = useConfigState();
  const appState = useAppState();
  return (
    <StoreContext.Provider value={{ appState, configState }}>
      {children}
    </StoreContext.Provider>
  )
};

// export const useAppStore = () => {
//   const configState = useConfigState();
//   const appState = useAppState();
//   return {
//     configState,
//     appState
//   }
// };
