export interface RenameDialogueRequest {
  label: number | string;
  sessionId: number | string;
}
export interface RenameDialogueResponse {
  name: string;
}

const dialog_create_mock = {
  a: '1',
};

export const renameDialogueConfig = {
  url: '/qa/dialogue/create',
  method: 'post',
  headers: {},
  mockData: dialog_create_mock,
  description: '',
  request_type: {} as RenameDialogueRequest,
  response_type: {} as RenameDialogueResponse,
};
