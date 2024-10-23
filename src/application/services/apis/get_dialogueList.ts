export interface RenameDialogueRequest {
  pageNo?: string;
  pageSize?: string;
}
export interface RenameDialogueResponse {
  name: string;
}

const dialog_create_mock = {
  request: {},
  response: {},
};

export const renameDialogueConfig = {
  url: '/qa/dialogue',
  method: 'get',
  headers: {},
  mockData: dialog_create_mock.response,
  description: '获取对话列表',
  request_type: {} as RenameDialogueRequest,
  response_type: {} as RenameDialogueResponse,
};
