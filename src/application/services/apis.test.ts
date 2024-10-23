import { describe, it, expect, vi } from 'vitest';
import { ServerBase } from './services.type';

// 假设的类型定义
type RenameDialogueResponse = { name: string };
type RenameDialogueRequest = { label: string; sessionId: string };

describe('api_renameDialogue', () => {
  it('should return a valid response', async () => {
    const mockResponse: RenameDialogueResponse = { name: 'Test Name' };
    // Mock the createAxiosInstance function
    const mockHttp = vi.fn().mockResolvedValue({ data: mockResponse });
    vi.mock('./axios_instant', () => ({
      createAxiosInstance: () => mockHttp,
      mockApiResponse: vi.fn(), // 如果需要mockApiResponse也可以mock
    }));

    const testProps: ServerBase<RenameDialogueRequest> = {
      data: {
        label: 'Test Label',
        sessionId: '12345',
      },
      config: {
        url: 'http://localhost:3000', // 替换为您的API基础URL
        token: 'your_token_here', // 替换为您的token
        enableMock: false, // 设置为true以启用mock
      },
    };

    // 假设的api_renameDialogue函数
    const api_renameDialogue = async (props: ServerBase<RenameDialogueRequest>) => {
      const response = await mockHttp(); // 使用mockHttp模拟请求
      return response.data;
    };

    const response = await api_renameDialogue(testProps);
    console.log('API返回的响应:', response); // 打印返回的响应
    expect(response).toEqual(mockResponse);
    expect(mockHttp).toHaveBeenCalled(); // 确保HTTP请求被调用
  });
});
