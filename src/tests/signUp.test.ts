import { signUp } from "./..//apis/auth/auth.api";
import axiosInstance from "./../apis/auth/axiosInstance";
jest.mock("@/apis/auth/axiosInstance");

describe("signUp 함수 테스트", () => {
  it("회원가입 시, 서버에 적절한 데이터 전송 후 응답받음", async () => {
    const mockResponse = { data: { success: true } };

    (axiosInstance.post as jest.Mock).mockResolvedValue(mockResponse);

    const response = await signUp({
      id: "testId456a",
      password: "testPassword1!",
      nickname: "testNickname123",
    });

    expect(axiosInstance.post).toHaveBeenCalledWith("/register", {
      id: "testId456a",
      password: "testPassword1!",
      nickname: "testNickname123",
    });
    expect(response).toEqual(mockResponse.data);
  });
});
