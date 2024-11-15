example

```
import { createAxiosInstance } from '../axios_instant';
import { ServerBase } from '../services.type';

export interface GetConversationsRequest {
  user: string;
  last_id?: string;
  limit?: number;
  pinned?: boolean;
  sort_by?: string;
}

export interface ConversationData {
  id: string;
  name: string;
  inputs: Record<string, any>;
  status: string;
  created_at: number;
}

export interface GetConversationsResponse {
  limit: number;
  has_more: boolean;
  data: Array<ConversationData>;
}

const getConversationsMock = {
  request: {} as GetConversationsRequest,
  response: {} as GetConversationsResponse,
};

export const getConversationsConfig = {
  url: '/conversations',
  method: 'GET',
  headers: {},
  mockData: getConversationsMock.response,
  description: '获取对话列表',
  request_type: getConversationsMock.request,
  response_type: getConversationsMock.response,
};

export const api_getConversations = (
  props: ServerBase<GetConversationsRequest>
): Promise<GetConversationsResponse> => {
  const { url, method } = getConversationsConfig;
  const requestData = {
    user: props.data.user,
    last_id: props.data.last_id,
    limit: props.data.limit,
    pinned: props.data.pinned,
    sort_by: props.data.sort_by,
  };
  const http = createAxiosInstance(props.config.url, props.config.token);
  const queryUrl = `${url}`;
  return http({
    url: queryUrl,
    method,
    params: requestData,
  }).then((res) => res.data as GetConversationsResponse);
};

```
