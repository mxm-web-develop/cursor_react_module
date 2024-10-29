import { create } from 'zustand';
import useConfigState from './useConfigState';

interface AppData {
  conversations_list: any[];
  retriever_info: any[];
  assist_list: any[];
  activedConversation?: any;
  status: string;
  sortRules: { label: string; dayPeriod: number }[];
  conversations_list_pagging: { pageNo: number; totalPages: number };
}

interface ConversationData {
  id?: string;
  queryId?: string;
  name: string;
  status: string;
  modify_timeStamp: number;
}

interface AppState {
  inputer: React.MutableRefObject<null | any>;
  appData: AppData;
  conversationData: ConversationData;
  setAppData: (data: Partial<AppData>) => void;
  setConversationData: (data: Partial<ConversationData>) => void;
}

const useAppState = create<AppState>((set) => ({
  inputer: { current: null },
  appData: {
    conversations_list: [],
    retriever_info: [],
    assist_list: [],
    activedConversation: undefined,
    status: '0',
    sortRules: [{ label: '当天', dayPeriod: 1 }],
    conversations_list_pagging: { pageNo: 1, totalPages: 0 },
  },
  conversationData: {
    id: undefined,
    queryId: undefined,
    name: 'untitled',
    status: '0',
    modify_timeStamp: new Date().getTime(),
  },
  setAppData: (data) => set((state) => ({ appData: { ...state.appData, ...data } })),
  setConversationData: (data) => set((state) => ({ conversationData: { ...state.conversationData, ...data } })),
}));

export default useAppState;